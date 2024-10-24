import { Test, TestingModule } from '@nestjs/testing';
import { OpportunitiesResolver } from './opportunities.resolver';

describe('OpportunitiesResolver', () => {
  let resolver: OpportunitiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpportunitiesResolver],
    }).compile();

    resolver = module.get<OpportunitiesResolver>(OpportunitiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
