import { Field, InputType } from "@nestjs/graphql";
import { IsString, MaxLength } from "class-validator";

@InputType()
export class DeleteParticipantInput {
  @IsString()
  @MaxLength(26)
  @Field()
  id: string;

  @Field((type) => Boolean)
  delete: boolean
}