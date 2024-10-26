import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Collaborator } from "src/collaborators/entities/collaborators.entitiy"
import { Participant } from "src/participants/entities/participant.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class OpportunityStatus {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column({ length: 10 })
  @Field()
  name: string

  @OneToMany(() => Participant, (participant) => participant.opportunityStatus)
  @Field(() => [Participant])
  participants: Participant[]

  @OneToMany(() => Collaborator, (collaborator) => collaborator.opportunityStatus)
  @Field(() => [Collaborator])
  collaborators: Collaborator[];
}