import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Collaborator } from 'src/collaborators/entities/collaborators.entitiy';
import { Participant } from 'src/participants/entities/participant.entity';
import { User } from 'src/users/entities/user.entity';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@ObjectType()
@Entity()
export class UserTask {
  @PrimaryColumn('char', {length: 26})
  @Field()
  id: string

  @ManyToOne(() => User, (user) => user.userTasks)
  @Field(() => User)
  user: User

  @Column()
  @Field()
  title: string

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string

  @Column()
  @Field()
  createDate: string

  @Column()
  @Field()
  limitDate: string

  @Column('boolean')
  @Field((type) => Boolean)
  status: boolean

  @Column('boolean')
  @Field((type) => Boolean)
  isDeleted: boolean

  @ManyToOne(() => Participant, (participant) => participant.userTask, { nullable: true })
  @Field((type) => Participant, { nullable: true })
  participant?: Participant

  @ManyToOne(() => Collaborator, (collaborator) => collaborator.userTask, { nullable: true })
  @Field((type) => Collaborator, { nullable: true })
  collaborator?: Collaborator

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = ulid();
      this.isDeleted = false;
    }
  }
}
