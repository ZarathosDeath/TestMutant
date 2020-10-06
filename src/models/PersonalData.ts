import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable} from "typeorm";
import {User} from './User'
import { Company } from "./Company";


@Entity()
export class PersonalData {
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.personalData)
    user_id: User;
    
    @Column()
    name: string;
    
    @OneToOne(type => Company)
    @JoinTable()
    company: Company
    
}

export type PersonalDataParams = Omit<PersonalData, 'id'>