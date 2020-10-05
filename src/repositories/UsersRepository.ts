import { DownloadUsersRepository } from "./protocols";
import { User } from "../models/User";

export class UsersRepository implements DownloadUsersRepository  {
  async download (): Promise<User[]> {
    return
  }
}