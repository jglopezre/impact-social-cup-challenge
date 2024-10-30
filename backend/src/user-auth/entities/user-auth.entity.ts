import { ObjectType, Field} from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
@ObjectType()
export class UserAuth {
  @PrimaryColumn()
  id: string

  @OneToOne(() => User)
  @JoinColumn()
  @Field()
  user: User

  @Column()
  @Field()
  token: string

  @BeforeInsert()
  generateId() {
    if (!this.id) this.id = ulid();
  }
}
