import { Test, TestingModule } from '@nestjs/testing';
import { UserTasksResolver } from './user-tasks.resolver';
import { UserTasksService } from './user-tasks.service';

describe('UserTasksResolver', () => {
  let resolver: UserTasksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTasksResolver, UserTasksService],
    }).compile();

    resolver = module.get<UserTasksResolver>(UserTasksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
