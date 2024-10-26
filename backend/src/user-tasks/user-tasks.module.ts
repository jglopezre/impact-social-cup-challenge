import { Module } from '@nestjs/common';
import { UserTasksService } from './user-tasks.service';
import { UserTasksResolver } from './user-tasks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTask } from './entities/user-task.entity';
import { Participant } from 'src/participants/entities/participant.entity';
import { Collaborator } from 'src/collaborators/entities/collaborators.entitiy';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTask, User, Participant, Collaborator])],
  providers: [UserTasksResolver, UserTasksService],
})
export class UserTasksModule {}
