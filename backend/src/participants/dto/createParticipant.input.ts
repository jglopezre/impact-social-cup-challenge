import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateParticipantInput {
  @MinLength(2)
  @MaxLength(20)
  @IsString()
  @Field()
  firstName: string

  @MinLength(2)
  @MaxLength(20)
  @IsString()
  @Field()
  lastName: string

  @IsEmail()
  @Field()
  email: string
  
  @Field((type) => Int, {nullable: true, defaultValue: 0})
  tickets?: number

  /* @MaxLength(1)
  @Field((type) => Int, {nullable: true, defaultValue: 1})
  oportunityStatus?: number */
}
