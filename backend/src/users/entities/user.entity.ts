import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserTask } from 'src/user-tasks/entities/user-task.entity';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn('char', { length: 26, unique: true })
  @Field()
  id: string

  @Column()
  @Field()
  firstName: string

  @Column()
  @Field()
  lastName: string

  @Column({ unique: true })
  @Field()
  email: string

  @Column({ unique: true })
  @Field()
  username: string

  @Column()
  @Field()
  password: string

  @OneToMany(() => UserTask, (userTask) => userTask.user)
  @Field(() => [UserTask])
  userTasks: UserTask[]

  @BeforeInsert()
  generateId() {
    if (!this.id) this.id = ulid();
  }
}
