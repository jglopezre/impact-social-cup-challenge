import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserTasksService } from './user-tasks.service';
import { UserTask } from './entities/user-task.entity';
import { CreateUserTaskInput } from './dto/create-user-task.input';
import { UpdateUserTaskInput } from './dto/update-user-task.input';
import { DeleteUserTaskInput } from './dto/delete-user-task.input';

@Resolver(() => UserTask)
export class UserTasksResolver {
  constructor(private readonly userTasksService: UserTasksService) {}

  @Mutation(() => UserTask)
  createUserTask(@Args('createUserTaskInput') createUserTaskInput: CreateUserTaskInput) {
    return this.userTasksService.create(createUserTaskInput);
  }

  @Query(() => [UserTask])
  userTasks() {
    return this.userTasksService.findAll();
  }

  @Query(() => UserTask)
  userTask(@Args('id') id: string) {
    return this.userTasksService.findOne(id);
  }

  @Mutation(() => UserTask)
  updateUserTask(@Args('userTaskInput') userTaskInput: UpdateUserTaskInput) {
    return this.userTasksService.updateOne(userTaskInput.id, userTaskInput);
  }

  @Mutation(() => UserTask)
  deleteUserTask(@Args('userTaskInput') userTaskInput: DeleteUserTaskInput) {
    return this.userTasksService.deleteOne(userTaskInput.id, userTaskInput);
  }
}
