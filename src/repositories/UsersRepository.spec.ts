import connection from '../helpers/typeormHelper'
import { UsersRepository } from './UsersRepository'
import { BaseEntity, Repository } from 'typeorm'
import { User } from '@/models/User'
import { UserParams } from '@/models/User'
import { PersonalDataParams } from '@/models/PersonalData'
import { CompanyParams } from '@/models/Company'
import { AddressDataParams } from '@/models/AddressData'
import { ContactDetailsParams } from '@/models/ContactDetails'
let usersRepository: Repository<User>

const company: CompanyParams = {
  name: 'any_name',
  catchPhrase: 'any_phrase',
  bs: 'any_bs'
}

const personalData: PersonalDataParams = {
  username: 'any_username',
  name: 'any_name',
  company
}

const addressData: AddressDataParams = {
  street: 'any_street',
  suite: 'any_suite',
  city: 'any_city',
  zipcode: 'any_zipcode',
  latitude: 'any_lat',
  longitude: 'any_long'
}

const contactDetails: ContactDetailsParams = {
  email: 'any_mail',
  phone: 'any_phone',
  website: 'any_website'
}

const mockAddUserParams = (): UserParams => ({
  personalData: personalData,
  addressData: addressData,
  contactDetails: contactDetails
})

describe('UsersRepository', () => {
  beforeAll(async () => {
    await connection.create()
  })

  afterAll(async () => {
    await connection.close()
  })

  beforeEach(async () => {
    await connection.clear()
    usersRepository = await connection.getRepository('User')
  })

  describe('add()', () => {
    test('should add new users on success', async () => {
      const sut = new UsersRepository()
      await sut.add([mockAddUserParams()])
      const count = await usersRepository.count()
      expect(count).toBe(1)
    });
  });
});