import { Field, InputType } from "@nestjs/graphql"
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator"

@InputType()
export class CreateCollaboratorInput {
  @MinLength(2)
  @MaxLength(20)
  @Field()
  firstName: string

  @MinLength(2)
  @MaxLength(20)
  @Field()
  lastName: string

  @IsEmail()
  @Field()
  email: string

  @IsString()
  @Field()
  phone: string

  @MinLength(2)
  @MaxLength(40)
  @Field()
  company: string
}
