import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable} from "typeorm";
import {User} from './User'
import { Company } from "./Company";

@Entity()
export class PersonalData {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    user_id: User;

    @Column()
    username: string;

    @Column()
    name: string;

    @OneToOne(type => Company)
    @JoinTable()
    company: Company

}
