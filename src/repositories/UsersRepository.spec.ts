import connection from '../helpers/typeormHelper'
import { UsersRepository } from './UsersRepository'
import { Repository } from 'typeorm'
import { User } from '@/models/User'
import { RegularUserParams } from '@/models/RegularUser'
let usersRepository: Repository<User>

const mockAddUserParams = (): RegularUserParams => ({
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: -37.3159,
      lng: 81.1496
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
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