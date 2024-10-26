import { Module } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { OpportunitiesResolver } from './opportunities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpportunityStatus } from './entities/opportunities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OpportunityStatus])],
  providers: [OpportunitiesService, OpportunitiesResolver],
  exports: [OpportunitiesService]
})
export class OpportunitiesModule {}
