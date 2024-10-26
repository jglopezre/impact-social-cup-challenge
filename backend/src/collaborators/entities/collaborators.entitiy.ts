import { Field, ObjectType } from '@nestjs/graphql';
import { OpportunityStatus } from 'src/opportunities/entities/opportunities.entity';
import { UserTask } from 'src/user-tasks/entities/user-task.entity';
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
@ObjectType()
export class Collaborator {
  @PrimaryColumn('char', { length: 26, unique: true })
  @Field()
  id: string

  @Column({ length: 20 })
  @Field()
  firstName: string

  @Column({ length: 20 })
  @Field()
  lastName: string

  @Column({ unique: true, length: 80 })
  @Field()
  email: string

  @Column({ length: 20 })
  @Field()
  phone: string

  @Column({length: 40})
  @Field()
  company: string

  @Column('boolean')
  @Field((type) => Boolean)
  isDeleted: boolean

  @ManyToOne(() => OpportunityStatus, (opportunityStatus) => opportunityStatus.collaborators)
  @Field(() => OpportunityStatus)
  opportunityStatus: OpportunityStatus

  @OneToMany(() => UserTask, (userTask) => userTask.participant)
  @Field((type) => [UserTask])
  userTask: UserTask[]

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = ulid();
      this.isDeleted = false;
    }
  }
}