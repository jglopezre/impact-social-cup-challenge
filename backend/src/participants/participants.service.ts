import { Injectable } from '@nestjs/common';
import { Participant } from './entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParticipantInput } from './dto/createParticipant.input';

@Injectable()
export class ParticipantsService {
constructor(@InjectRepository(Participant) private participantRepository: Repository<Participant>) {}

  findAll(): Promise<Participant[]> {
    return this.participantRepository.find();
  }

  createParticipant(participant: CreateParticipantInput): Promise<Participant> {
    const newParticipant = this.participantRepository.create(participant);
    return this.participantRepository.save(newParticipant);
  }
}
