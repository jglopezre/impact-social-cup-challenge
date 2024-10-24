import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ParticipantsService } from './participants.service';
import { Participant } from './entity';
import { CreateParticipantInput } from './dto/createParticipant.input';

@Resolver()
export class ParticipantsResolver {
  constructor(private participantsService: ParticipantsService) {}

  @Query((returns) => [Participant])
  participants() {
    return this.participantsService.findAll();
  }

  @Mutation((returns) => Participant)
  createParticipant(@Args('participantInput') participantInput: CreateParticipantInput) {
    return this.participantsService.createParticipant(participantInput);
  }
}
