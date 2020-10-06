import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { PersonalData, PersonalDataParams } from "./PersonalData";
import { AddressData, AddressDataParams } from "./AddressData"
import { ContactDetails, ContactDetailsParams } from "./ContactDetails";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @OneToOne(type => PersonalData, personalData => personalData.user_id)
    @JoinColumn()
    personalData: PersonalData;

    @OneToOne(type => AddressData, addressData => addressData.user_id)
    @JoinColumn()
    addressData: AddressData;

    @OneToOne(type => ContactDetails, contactDetails => contactDetails.user_id)
    @JoinColumn()
    contactDetails: ContactDetails;

}

export type UserParams = Omit<User, 'id'>

