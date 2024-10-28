import { IsBoolean, IsString, MaxLength } from 'class-validator';
import { CreateUserTaskInput } from './create-user-task.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserTaskInput extends PartialType(CreateUserTaskInput) {
  @IsString()
  @MaxLength(26)
  @Field()
  id: string;

  @IsBoolean()
  @Field((type) => Boolean, { nullable: true, defaultValue: false })
  status?: boolean
}
