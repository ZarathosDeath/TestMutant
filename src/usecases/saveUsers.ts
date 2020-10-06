import { SaveUsers, DownloadUsers } from '@/models/protocols'
import { User } from '../models/User';
import { Repository, getConnection } from 'typeorm';
import { AddressData } from '../models/AddressData';
import { ContactDetails } from '../models/ContactDetails';
import { Company } from '../models/Company';
import { PersonalData } from '../models/PersonalData';

export class DbSaveUsers implements SaveUsers {
  usersRepository: Repository<User>
  constructor(private readonly downloadUsers: DownloadUsers) {}

  async save (): Promise<void> {
    const users = await this.downloadUsers.download()    
    const regexp = new RegExp("\\b(\\w*Apt\\w*)\\b")
    const selectedUsers = users.filter(user => regexp.test(user.address.suite))

    selectedUsers.forEach(async user => {
      getConnection().transaction(async entityManager => {
        const newAddress = new AddressData()
        newAddress.city = user.address.city
        newAddress.street = user.address.street
        newAddress.suite = user.address.suite
        newAddress.zipcode = user.address.zipcode
        await entityManager.save(newAddress)
  
        const newContact = new ContactDetails()
        newContact.email = user.email
        newContact.phone = user.phone
        newContact.website = user.website
        await entityManager.save(newContact)

        const newCompany = new Company()
        newCompany.bs = user.company.bs
        newCompany.catchPhrase = user.company.catchPhrase
        newCompany.name = user.company.name
        await entityManager.save(newCompany)

        const newPersonalData = new PersonalData()
        newPersonalData.company = newCompany
        newPersonalData.name = user.name
        await entityManager.save(newPersonalData)

        const newUser = new User()
        newUser.username = user.username
        newUser.contactDetails = newContact
        newUser.addressData = newAddress
        newUser.personalData = newPersonalData
        await entityManager.save(newUser)
      })
    })
    
    
  }
}