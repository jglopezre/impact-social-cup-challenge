import { Module } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { ParticipantsResolver } from './participants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './entities/participant.entity';
import { OpportunitiesModule } from 'src/opportunities/opportunities.module';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participant, OpportunityStatus])],
  providers: [ParticipantsService, ParticipantsResolver]
})
export class ParticipantsModule {}
