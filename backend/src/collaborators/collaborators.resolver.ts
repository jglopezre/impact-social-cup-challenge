import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CollaboratorsService } from './collaborators.service';
import { Query } from '@nestjs/graphql';
import { Collaborator } from './entitiy';
import { CreateCollaboratorInput } from './dto/createCollaborator.input';

@Resolver()
export class CollaboratorsResolver {
  constructor(private CollaboratorsService: CollaboratorsService) {}

  @Query((returns) => [Collaborator])
  collaborators() {
    return this.CollaboratorsService.findAll()
  }

  @Mutation((returns) => Collaborator)
  createCollaborator(@Args('collaboratorInput') collaboratorInput: CreateCollaboratorInput) {
    return this.CollaboratorsService.createCollaborator(collaboratorInput);
  }
}
