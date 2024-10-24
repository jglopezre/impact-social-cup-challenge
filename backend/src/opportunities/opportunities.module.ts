import { Module } from '@nestjs/common';
import { OpportunitiesService } from './opportunities.service';
import { OpportunitiesResolver } from './opportunities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OportunityStatus } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([OportunityStatus])],
  providers: [OpportunitiesService, OpportunitiesResolver]
})
export class OpportunitiesModule {}
