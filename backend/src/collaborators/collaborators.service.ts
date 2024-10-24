import { Injectable } from '@nestjs/common';
import { Collaborator } from './entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCollaboratorInput } from './dto/createCollaborator.input';

@Injectable()
export class CollaboratorsService {
  constructor(@InjectRepository(Collaborator) private collaboratorsRepository: Repository<Collaborator>) {}

  findAll(): Promise<Collaborator[]> {
    return this.collaboratorsRepository.find();
  }

  createCollaborator(collaborator: CreateCollaboratorInput): Promise<Collaborator> {
    const newCollaborator = this.collaboratorsRepository.create(collaborator);
    return this.collaboratorsRepository.save(newCollaborator);
  }
}
