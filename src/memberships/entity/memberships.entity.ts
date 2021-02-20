import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Membership {
  @PrimaryColumn()
  email: string;

  @Column()
  career: string;

  @Column()
  techStack: string;

  @Column()
  interestTech: string;
}