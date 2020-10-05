import { AddUsersRepository } from "./protocols";
import { User, UserParams } from "../models/User";
import { getRepository, InsertResult } from "typeorm"

export class UsersRepository implements AddUsersRepository  {
  async add (data: UserParams[]): Promise<InsertResult> {
    const userRepository = getRepository(User)
    const res = await userRepository.insert(data)    
    return res
  }
}