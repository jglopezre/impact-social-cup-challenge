import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field((type) => Int)
  id: number

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
  userName: string

  @Field()
  password: string
}
