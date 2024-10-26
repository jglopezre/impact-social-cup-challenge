import { Field, Int, ObjectType } from "@nestjs/graphql"
import { OpportunityStatus } from "src/opportunities/entities/opportunities.entity"
import { UserTask } from "src/user-tasks/entities/user-task.entity"
import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm"
import { ulid } from "ulid"

@Entity()
@ObjectType()
export class Participant {
  @PrimaryColumn('char', { length: 26, unique: true })
  @Field()
  id: string

  @Column({length: 20})
  @Field()
  firstName: string

  @Column({length: 20})
  @Field()
  lastName: string

  @Column({ unique: true, length:80 })
  @Field()
  email: string

  @Column({ type: 'int' })
  @Field((type) => Int)
  tickets: number

  @Column('boolean')
  @Field((type) => Boolean)
  isDeleted: boolean

  @ManyToOne(() => OpportunityStatus, (oportunityStatus) => oportunityStatus.participants)
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
