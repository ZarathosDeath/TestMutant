import { DownloadUsersController } from './downloadUsersController'
import { DownloadUsersSpy } from './test/mockDownloadUsers'

jest.mock('./test/mockDownloadUsers')

describe('DownloadUsersController', () => {
  test('should call DownloadUsers', async () => {
    const downloadUsersSpy = new DownloadUsersSpy()
    const sut = new DownloadUsersController(downloadUsersSpy)
    await sut.handle({})
    expect(downloadUsersSpy.download).toHaveBeenCalled()
  });

  test('should return 500 if DownloadUsers throws', async () => {
    const downloadUsersSpy = new DownloadUsersSpy()
    const sut = new DownloadUsersController(downloadUsersSpy)
    jest.spyOn(downloadUsersSpy, 'download').mockImplementationOnce(() => {
      throw new Error()
    })
    const httpResponse = await sut.handle({})
    expect(httpResponse.statusCode).toBe(500)
  })
})