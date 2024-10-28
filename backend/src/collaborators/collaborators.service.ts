import { Injectable } from '@nestjs/common';
import { Collaborator } from './entities/collaborators.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorInput } from './dto/create-collaborator.input';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';
import { UpdateCollaboratorInput } from './dto/update-collaborator.input';
import { DeleteCollaboratorInput } from './dto/delete-collaborator.input';

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
    return this.collaboratorsRepository.find({
      where: { isDeleted: false },
      relations: ['opportunityStatus'],
    });
  }

  findOne(id: string): Promise<Collaborator> {
    return this.collaboratorsRepository.findOne({
      where: {
        isDeleted: false,
        id
      },
      relations: ['opportunityStatus'],
    });
  }

  async updateOne(id: string, updateCollaboratorInput: UpdateCollaboratorInput): Promise<Collaborator> {
    const opportunityStatus = await this.opportunityRepository.findOne({
      where: { id: updateCollaboratorInput.opportunityStatus },
    })

    await this.collaboratorsRepository.update(id, {
      ...updateCollaboratorInput,
      opportunityStatus,
    },
  );
    return this.collaboratorsRepository.findOne({
      where: {
        id,
        isDeleted: false,
      },
      relations: ['opportunityStatus'],
    });
  }

  async deleteOne (id: string, deleteCollaboratorInput: DeleteCollaboratorInput): Promise<Collaborator> {
    const collaborator = await this.collaboratorsRepository.findOne({
      where: {
        id,
        isDeleted: false,
      },
      relations: ['opportunityStatus']
    })

    if (!collaborator) return null
    
    collaborator.isDeleted = deleteCollaboratorInput.delete;
    return this.collaboratorsRepository.save(collaborator);
     
  }
}
