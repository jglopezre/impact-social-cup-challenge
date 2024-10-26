import { Injectable } from '@nestjs/common';
import { Collaborator } from './entities/collaborators.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorInput } from './dto/createCollaborator.input';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';
import { OpportunitiesService } from 'src/opportunities/opportunities.service';

@Injectable()
export class CollaboratorsService {
  constructor(
    @InjectRepository(Collaborator)
    private collaboratorsRepository: Repository<Collaborator>,
    
    @InjectRepository(OpportunityStatus)
    private opportunityRepository: Repository<OpportunityStatus>,
  ) {}
  
  async create(collaborator: CreateCollaboratorInput): Promise<Collaborator> {
    const opportunityStatus = await this.opportunityRepository.findOne({
      where: { id: 1 }
    })

    const newCollaborator = this.collaboratorsRepository.create({
      ...collaborator,
      opportunityStatus,
    });

    return this.collaboratorsRepository.save(newCollaborator);
  }

  findAll(): Promise<Collaborator[]> {
    return this.collaboratorsRepository.find({ relations: ['opportunityStatus'] });
  }

  findOne(id: string): Promise<Collaborator> {
    return this.collaboratorsRepository.findOne({
      where: { id },
      relations: ['opportunityStatus']
    });
  }
}
