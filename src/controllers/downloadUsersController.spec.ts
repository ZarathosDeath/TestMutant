import { DownloadUsersController } from './downloadUsersController'
import DownloadUsersSpy from './test/mockDownloadUsers'

jest.mock('./test/mockDownloadUsers')

describe('DownloadUsersController', () => {
  test('should call DownloadUsers', async () => {
    const downloadUsersSpy = new DownloadUsersSpy()
    const sut = new DownloadUsersController(downloadUsersSpy)
    await sut.handle({})
    expect(downloadUsersSpy.download).toHaveBeenCalled()
  });
});