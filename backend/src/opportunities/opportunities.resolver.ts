import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { OpportunitiesService } from './opportunities.service';
import { OpportunityStatus } from './entities/opportunities.entity';

@Resolver()
export class OpportunitiesResolver {
  constructor(private opportunitiesService: OpportunitiesService) {}

  @Query((returns) => [OpportunityStatus])
  opportunities(): Promise<OpportunityStatus[]> {
    return this.opportunitiesService.findAll();
  }

  @Query((returns) => OpportunityStatus)
  opportunity(@Args('id', { type: () => Int}) id: number): Promise<OpportunityStatus> {
    return this.opportunitiesService.findOne(id);
  }
}
