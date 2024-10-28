import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { IsEmpty, IsString, MaxLength } from 'class-validator';
import { Collaborator } from './entities/collaborators.entitiy';
import { CollaboratorsService } from './collaborators.service';
import { CreateCollaboratorInput } from './dto/create-collaborator.input';
import { UpdateCollaboratorInput } from './dto/update-collaborator.input';
import { DeleteCollaboratorInput } from './dto/delete-collaborator.input';

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
  constructor(private CollaboratorsService: CollaboratorsService) {}
  @IsEmpty()
  @MaxLength(26)
  @IsString()
  @Query((returns) => Collaborator)
  collaborator(@Args('id') id: string) {
    return this.CollaboratorsService.findOne(id);
  }

  @IsEmpty()
  @MaxLength(26)
  @IsString()
  @Query((returns) => [Collaborator])
  collaborators() {
    return this.CollaboratorsService.findAll()
  }

  @Mutation((returns) => Collaborator)
  createCollaborator(@Args('collaboratorInput') collaboratorInput: CreateCollaboratorInput) {
    return this.CollaboratorsService.create(collaboratorInput);
  }

  @Mutation((returns) => Collaborator)
  updateCollaborator(@Args('collaboratorInput') collaboratorInput: UpdateCollaboratorInput) {
    return this.CollaboratorsService.updateOne(collaboratorInput.id, collaboratorInput)
  }

  @Mutation((returns) => Collaborator)
  deleteCollaborator(@Args('colaboratorInput') collaboratorInput: DeleteCollaboratorInput) {
    return this.CollaboratorsService.deleteOne(collaboratorInput.id, collaboratorInput)
  }
}
