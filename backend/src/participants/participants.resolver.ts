import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ParticipantsService } from './participants.service';
import { Participant } from './entities/participant.entity';
import { CreateParticipantInput } from './dto/createParticipant.input';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';

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
}
