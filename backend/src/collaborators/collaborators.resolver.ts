import { Args, Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CollaboratorsService } from './collaborators.service';
import { Query } from '@nestjs/graphql';
import { Collaborator } from './entities/collaborators.entitiy';
import { CreateCollaboratorInput } from './dto/createCollaborator.input';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';
import { IsEmpty, IsString, MaxLength } from 'class-validator';

@Resolver(() => Collaborator)
export class CollaboratorsResolver {
  constructor(private CollaboratorsService: CollaboratorsService) {}

  @IsEmpty()
  @MaxLength(26)
  @IsString()
  @Query((returns) => [Collaborator])
  collaborators() {
    return this.CollaboratorsService.findAll()
  }

  @IsEmpty()
  @MaxLength(26)
  @IsString()
  @Query((returns) => Collaborator)
  collaborator(@Args('id') id: string) {
    return this.CollaboratorsService.findOne(id);
  }

  @Mutation((returns) => Collaborator)
  createCollaborator(@Args('collaboratorInput') collaboratorInput: CreateCollaboratorInput) {
    return this.CollaboratorsService.create(collaboratorInput);
  }
}
