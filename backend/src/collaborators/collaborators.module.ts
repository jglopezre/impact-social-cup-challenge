import { Module } from '@nestjs/common';
import { CollaboratorsService } from './collaborators.service';
import { CollaboratorsResolver } from './collaborators.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collaborator } from './entities/collaborators.entitiy';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collaborator, OpportunityStatus])],
  providers: [CollaboratorsService, CollaboratorsResolver]
})
export class CollaboratorsModule {}
