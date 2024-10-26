import { Injectable } from '@nestjs/common';
import { Participant } from './entities/participant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParticipantInput } from './dto/createParticipant.input';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';
import { OpportunitiesService } from 'src/opportunities/opportunities.service';

@Injectable()
export class ParticipantsService {
constructor(
  @InjectRepository(Participant)
  private participantRepository: Repository<Participant>,
  
  @InjectRepository(OpportunityStatus)
  private opportunityStatusRepository: Repository<OpportunityStatus>
) {}

  findAll(): Promise<Participant[]> {
    return this.participantRepository.find({ relations: ['opportunityStatus'] });
  }

  findOne(id: string): Promise<Participant> {
    return this.participantRepository.findOne({
      where: {
        id,
      }
    })
  }

  async create(participant: CreateParticipantInput): Promise<Participant> {
    const opportunityStatus = await this.opportunityStatusRepository.findOne({
      where: { id: 1 }
    })
    const newParticipant = this.participantRepository.create({
      ...participant,
      opportunityStatus,
    });
    return this.participantRepository.save(newParticipant);
  }
}
