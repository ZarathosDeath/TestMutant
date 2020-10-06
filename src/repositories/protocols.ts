import { User } from "../models/User";
import { InsertResult } from "typeorm";
import { RegularUser } from "@/models/RegularUser";

export interface DownloadUsersRepository {
  download: () => Promise<User[]>
}

export interface AddUsersRepository {
  add: (data: RegularUser[]) => Promise<InsertResult>
}