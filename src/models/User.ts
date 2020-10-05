import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { PersonalData } from "./PersonalData";
import { AddressData } from "./AddressData"
import { ContactDetails } from "./ContactDetails";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => PersonalData)
    @JoinColumn()
    personalData: PersonalData;

    @OneToOne(type => AddressData)
    @JoinColumn()
    addressData: AddressData;

    @OneToOne(type => ContactDetails)
    @JoinColumn()
    contactDetails: ContactDetails;

}
