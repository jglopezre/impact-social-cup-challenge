import { Field, InputType, PartialType } from "@nestjs/graphql";
import { IsBoolean, IsString, MaxLength } from "class-validator";

@InputType()
export class UpdateStatusUserTask {
  @IsString()
  @MaxLength(26)
  @Field()
  id: string;

  @IsBoolean()
  @Field((type) => Boolean)
  status: boolean
}