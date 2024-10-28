import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUserTaskInput {
  @MaxLength(26)
  @IsString()
  @Field()
  userId: string
  
  @MaxLength(40)
  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @IsString()
  @Field((type) => String)
  limitDate: string

  @Field({ nullable: true })
  participantId?: string

  @Field({ nullable: true })
  collaboratorId?: string
}
