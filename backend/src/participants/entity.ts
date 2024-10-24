import { Field, Int, ObjectType } from "@nestjs/graphql"
import { OportunityStatus } from "src/opportunities/entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@ObjectType()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  @Field()
  firstName: string

  @Column()
  @Field()
  lastName: string

  @Column()
  @Field()
  email: string

  @Column({ type: 'int' })
  @Field((type) => Int)
  tickets: number

  @ManyToOne(() => OportunityStatus, (oportunityStatus) => oportunityStatus.participants)
  oportunityStatus: OportunityStatus
}
