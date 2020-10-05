import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    catchPhrase: string;

    @Column()
    bs: string;

}

export type CompanyParams = Omit<Company, 'id'>
