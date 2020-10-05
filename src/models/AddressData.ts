import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from "typeorm";
import {User} from './User'

@Entity()
export class AddressData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    suite: string;

    @Column()
    city: string;

    @Column()
    zipcode: string;

    @Column({ type: 'point' })
    latitude: string;

    @Column({ type: 'point' })
    longitude: string;

}

export type AddressDataParams = Omit<AddressData, 'id'>
