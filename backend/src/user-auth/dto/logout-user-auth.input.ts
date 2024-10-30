import { IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LogoutUserInput {
  @IsString()
  @Field()
  token: string;
}
