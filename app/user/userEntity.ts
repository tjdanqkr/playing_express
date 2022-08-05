import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  img: string;
}

export type user = {
  id?: number;
  img: string;
  name: string;
};
