import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    user_id: User;

    @Column()
    name: string;

    @Column()
    catchPhrase: string;

    @Column()
    bs: string;

}
