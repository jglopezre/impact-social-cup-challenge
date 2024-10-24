import { Participant } from "src/participants/entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class OportunityStatus {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Participant, (participant) => participant.oportunityStatus)
  participants: Participant[]
}