import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { IsString, MaxLength } from "class-validator";
import { CreateCollaboratorInput } from "./create-collaborator.input";

@InputType()
export class UpdateCollaboratorInput extends PartialType(CreateCollaboratorInput) {
  @IsString()
  @MaxLength(26)
  @Field()
  id: string;

  @Field((type) => Int, { nullable: true })
  opportunityStatus?: number
}