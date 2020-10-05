const axios = require('axios')
const faker =  require('faker')
const { DbDownloadUsers } = require('./downloadUsers')
const mocked = require('ts-jest')

jest.mock('axios')

describe('DownloadUsers usecase', () => {
  const usersModelMock = [
    {
      id: 1,
      name: faker.name.findName(),
      username: faker.random.word(),
      phone: faker.phone.phoneNumber(),
      website: faker.internet.url()
    },
    {
      id: 1,
      name: faker.name.findName(),
      username: faker.random.word(),
      phone: faker.phone.phoneNumber(),
      website: faker.internet.url()
    }
  ]

  test('should return a list of Users on success', async () => {
    axios.get.mockResolvedValue({
      data: usersModelMock
    })

    const downloadUsers = new DbDownloadUsers()

    const res = await downloadUsers.download()
    
    expect(axios.get).toHaveBeenCalled()
    expect(res).toEqual(usersModelMock)
  })

  test('should throw if axios throws', async () => {
    axios.get.mockResolvedValue({
      data: usersModelMock
    })

    const downloadUsers = new DbDownloadUsers()

    const res = await downloadUsers.download()
    expect(axios.get).toHaveBeenCalled()
    expect(res).toEqual(usersModelMock)
  })
})