import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {User} from './User'

@Entity()
export class ContactDetails {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.contactDetails)
    user_id: User;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    website: string;

}

export type ContactDetailsParams = Omit<ContactDetails, 'id'>
