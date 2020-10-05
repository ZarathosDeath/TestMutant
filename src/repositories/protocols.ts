import { User } from "../models/User";

export interface DownloadUsersRepository {
  download: () => Promise<User[]>
}