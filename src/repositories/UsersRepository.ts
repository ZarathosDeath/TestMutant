import { AddUsersRepository } from "./protocols";
import { User, UserParams } from "../models/User";
import { getRepository, InsertResult, Transaction } from "typeorm"
import { RegularUserParams } from "@/models/RegularUser";

export class UsersRepository implements AddUsersRepository  {
  async add (data: RegularUserParams[]): Promise<InsertResult> {
    const userRepository = getRepository(User)
    const res = await userRepository.insert(data)
    return res
  }
}