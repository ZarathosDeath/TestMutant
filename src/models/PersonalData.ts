import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinTable} from "typeorm";
import {User} from './User'
import { Company, CompanyParams } from "./Company";


@Entity()
export class PersonalData {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;
    
    @Column()
    name: string;
    
    @OneToOne(type => Company)
    @JoinTable()
    company: CompanyParams
    
}

export type PersonalDataParams = Omit<PersonalData, 'id'>