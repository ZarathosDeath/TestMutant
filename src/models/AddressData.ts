import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {User} from './User'

@Entity()
export class AddressData {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.contactDetails)
    user_id: User;

    @Column()
    street: string;

    @Column()
    suite: string;

    @Column()
    city: string;

    @Column()
    zipcode: string;

}

export type AddressDataParams = Omit<AddressData, 'id'>
