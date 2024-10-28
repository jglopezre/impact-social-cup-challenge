import { Injectable } from '@nestjs/common';
import { Participant } from './entities/participant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParticipantInput } from './dto/createParticipant.input';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';
import { UpdateParticipantInput } from './dto/update-participant.input';
import { DeleteParticipantInput } from './dto/delete-participant.input';

@Injectable()
export class ParticipantsService {
constructor(
  @InjectRepository(Participant)
  private participantRepository: Repository<Participant>,
  
  @InjectRepository(OpportunityStatus)
  private opportunityStatusRepository: Repository<OpportunityStatus>
) {}

  findAll(): Promise<Participant[]> {
    return this.participantRepository.find({
      where: { isDeleted: false },
      relations: ['opportunityStatus'],
    });
  }

  findOne(id: string): Promise<Participant> {
    return this.participantRepository.findOne({
      where: {
        id,
        isDeleted: false,
      },
      relations: ['opportunityStatus']
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

  async updateOne(id: string, participantInput: UpdateParticipantInput): Promise<Participant> {
    const participant = await this.participantRepository.findOne({
      where: {
        id,
        isDeleted: false
      }
    })

    if (!participant) return null
    
    const opportunityStatus = await this.opportunityStatusRepository.findOne({
      where: { id: participantInput.opportunityStatus }
    })

    await this.participantRepository.update(id, {
      ...participantInput,
      opportunityStatus,
    })

    return await this.participantRepository.findOne({
      where: { id },
      relations: ['opportunityStatus'],
    })
  }

  async deleteOne(id: string, participantInput: DeleteParticipantInput): Promise<Participant> {
    const participant = await this.participantRepository.findOne({
      where: {
        id,
        isDeleted: false
      }
    });

    if(!participant) return null
    
    participant.isDeleted = participantInput.delete
    return this.participantRepository.save(participant);
  }
}
