import { Injectable } from '@nestjs/common';
import { CreateUserTaskInput } from './dto/create-user-task.input';
import { UpdateUserTaskInput } from './dto/update-user-task.input';
import { UserTask } from './entities/user-task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from 'src/participants/entities/participant.entity';
import { Collaborator } from 'src/collaborators/entities/collaborators.entitiy';
import { User } from 'src/users/entities/user.entity';
import { UpdateStatusUserTask } from './dto/update-status-user-task.input';

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
    
    const createDate = new Date().getUTCDate().toString();
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
    return this.userTaskRepository.find({ relations: ['user', 'participant', 'collaborator']});
  }

  findOne(id: string): Promise<UserTask> {
    return this.userTaskRepository.findOne({
      where: { id },
      relations: ['user'],
    })
  }

  update(id: string, updateUserTaskInput: UpdateUserTaskInput) {
    return `This action updates a #${id} userTask`;
  }

  async updateStatus(id: string, updateStatusUserTaskInput: UpdateStatusUserTask): Promise<UserTask> {
    const updateResult = await this.userTaskRepository.update(id, updateStatusUserTaskInput)
    console.log(updateResult);
    return await this.userTaskRepository.findOne({ where: { id: updateStatusUserTaskInput.id }})
  }

  remove(id: string) {
    return `This action removes a #${id} userTask`;
  }
}
