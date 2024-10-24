import { Field, InputType } from "@nestjs/graphql"
import { IsEmail, MaxLength, MinLength } from "class-validator"

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

  @Field({nullable: true, defaultValue:""})
  phone: string

  @MinLength(2)
  @MaxLength(20)
  @Field()
  company: string
}
