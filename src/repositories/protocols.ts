import { User } from "../models/User";
import { InsertResult } from "typeorm";

export interface DownloadUsersRepository {
  download: () => Promise<User[]>
}

export interface AddUsersRepository {
  add: (data: User[]) => Promise<InsertResult>
}