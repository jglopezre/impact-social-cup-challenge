import { Injectable } from '@nestjs/common';
import { CreateUserTaskInput } from './dto/create-user-task.input';
import { UpdateUserTaskInput } from './dto/update-user-task.input';
import { UserTask } from './entities/user-task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from 'src/participants/entities/participant.entity';
import { Collaborator } from 'src/collaborators/entities/collaborators.entitiy';
import { User } from 'src/users/entities/user.entity';
import { DeleteUserTaskInput } from './dto/delete-user-task.input';

@Injectable()
export class UserTasksService {
  constructor(
    @InjectRepository(UserTask)
    private userTaskRepository: Repository<UserTask>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,

    @InjectRepository(Collaborator)
    private collaboratorRepository: Repository<Collaborator>,
  ) {}

  async create(userTaskInput: CreateUserTaskInput) {
    const user = await this.userRepository.findOne({
      where: { id: userTaskInput.userId }
    })

    const participant = userTaskInput.participantId
      ? await this.participantRepository.findOne({ where: { id: userTaskInput.participantId}})
      : null;
    
    const collaborator = userTaskInput.collaboratorId
      ? await this.collaboratorRepository.findOne({ where : { id: userTaskInput.collaboratorId}})
      : null;
    
    const createDate = new Date().toISOString();
    console.log(createDate);

    const status = true;
        
    const newUserTask = this.userTaskRepository.create({
      ...userTaskInput,
      user,
      participant,
      collaborator,
      createDate,
      status
    });

    return this.userTaskRepository.save(newUserTask);
  }

  findAll(): Promise<UserTask[]> {
    return this.userTaskRepository.find({
      where: {
        isDeleted: false,
      },
      relations: ['user', 'participant', 'collaborator']
    });
  }

  findOne(id: string): Promise<UserTask> {
    return this.userTaskRepository.findOne({
      where: {
        id,
        isDeleted: false
      },
      relations: ['user', 'participant', 'collaborator'],
    })
  }

  async updateOne(id: string, updateUserTaskInput: UpdateUserTaskInput): Promise<UserTask> {
    const userTask = await this.userTaskRepository.findOne({
      where: {
        id,
        isDeleted: false,
      },
      relations: ['user', 'participant', 'collaborator'],
    })

    if(!userTask) return null

    const relationatedData = await this.getUserAndParticipantAndCollaborator(
      updateUserTaskInput.userId,
      updateUserTaskInput.participantId,
      updateUserTaskInput.collaboratorId,
    );

    Object.assign(updateUserTaskInput, relationatedData);

    const {
      collaboratorId,
      participantId,
      ...cleanedObject
    } = updateUserTaskInput;

    console.log(cleanedObject);

    await this.userTaskRepository.update(id, cleanedObject)

    return this.userTaskRepository.findOne({
      where: { id },
      relations: ['user', 'participant', 'collaborator'],
    })
  }

  async deleteOne(id: string, userTaskInput: DeleteUserTaskInput): Promise<UserTask> {
    const userTask = await this.userTaskRepository.findOne({
      where: {
        id,
        isDeleted: false,
      },
      relations: ['user', 'participant', 'collaborator'],
    });

    if(!userTask) return null;

    userTask.isDeleted = userTaskInput.delete;
    return this.userTaskRepository.save(userTask);
  }

  private async getUserAndParticipantAndCollaborator(
    userId: string,
    participantId: string,
    collaboratorId: string,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    })

    const participant = participantId
      ? await this.participantRepository.findOne({
        where: { id: participantId },
        relations: ['opportunityStatus'],
      })
      : null;

    const collaborator = collaboratorId
    ? await this.collaboratorRepository.findOne({
      where: { id: collaboratorId },
      relations: ['opportunityStatus'],
    })
    : null;

    return { user, participant, collaborator}
  }
}
