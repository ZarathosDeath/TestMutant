import { DownloadUsersController } from './downloadUsersController'
import { DownloadUsersSpy } from './test/mockDownloadUsers'

jest.mock('./test/mockDownloadUsers')

const makeSut = () => {
  const downloadUsersSpy = new DownloadUsersSpy()
  const sut = new DownloadUsersController(downloadUsersSpy)

  return {
    sut,
    downloadUsersSpy
  }
}

describe('DownloadUsersController', () => {
  test('should call DownloadUsers', async () => {
    const { sut, downloadUsersSpy } = makeSut()
    await sut.handle({})
    expect(downloadUsersSpy.download).toHaveBeenCalled()
  });

  test('should return 500 if DownloadUsers throws', async () => {
    const { sut, downloadUsersSpy } = makeSut()
    jest.spyOn(downloadUsersSpy, 'download').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle({})
    expect(httpResponse.statusCode).toBe(500)
  })

  test('should return 200 on success', async() => {
    const { sut, downloadUsersSpy } = makeSut()
    const httpResponse = await sut.handle({})
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual(downloadUsersSpy.usersModel)
  });
})