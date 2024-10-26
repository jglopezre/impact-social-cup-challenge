import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
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

  @Field()
  username: string

  @Field()
  password: string
}
