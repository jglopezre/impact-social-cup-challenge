import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([Collaborator])],
  providers: [CollaboratorsService, CollaboratorsResolver]
})
export class CollaboratorsModule {}
