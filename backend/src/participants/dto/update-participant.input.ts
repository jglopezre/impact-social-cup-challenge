import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateParticipantInput } from "./createParticipant.input";
import { IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateParticipantInput extends PartialType(CreateParticipantInput) {
  @IsString()
  @MaxLength(26)
  @Field()
  id: string;

  @Field((type) => Int, { nullable: true })
  opportunityStatus?: number
}