import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ParticipantsService } from './participants.service';
import { Participant } from './entities/participant.entity';
import { CreateParticipantInput } from './dto/createParticipant.input';
import { UpdateParticipantInput } from './dto/update-participant.input';
import { DeleteParticipantInput } from './dto/delete-participant.input';

@Resolver(() => Participant)
export class ParticipantsResolver {
  constructor(private participantsService: ParticipantsService) {}

  @Query((returns) => Participant)
  participant(@Args('id') id: string) {
    return this.participantsService.findOne(id);
  }

  @Query((returns) => [Participant])
  participants() {
    return this.participantsService.findAll();
  }

  @Mutation((returns) => Participant)
  createParticipant(@Args('participantInput') participantInput: CreateParticipantInput) {
    return this.participantsService.create(participantInput);
  }

  @Mutation((returns) => Participant)
  updateParticipant(@Args('participantInput') participantInput: UpdateParticipantInput) {
    return this.participantsService.updateOne(participantInput.id, participantInput);
  }

  @Mutation((returns) => Participant)
  deleteParticipant(@Args('participantInput') participantInput: DeleteParticipantInput) {
    return this.participantsService.deleteOne(participantInput.id, participantInput);
  }
}
