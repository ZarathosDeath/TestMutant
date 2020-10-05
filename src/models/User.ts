import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { PersonalData, PersonalDataParams } from "./PersonalData";
import { AddressData, AddressDataParams } from "./AddressData"
import { ContactDetails, ContactDetailsParams } from "./ContactDetails";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => PersonalData)
    @JoinColumn()
    personalData: PersonalDataParams;

    @OneToOne(type => AddressData)
    @JoinColumn()
    addressData: AddressDataParams;

    @OneToOne(type => ContactDetails)
    @JoinColumn()
    contactDetails: ContactDetailsParams;

}

export type UserParams = Omit<User, 'id'>

