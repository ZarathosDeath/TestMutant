import { createConnection, getConnection, EntityTarget, Repository, EntitySchema } from "typeorm";
import { User } from "@/models/User";

const connection = {
  async create(): Promise<void> {
    await createConnection()
  },

  async close(): Promise<void> {
    await getConnection().close()
  },

  getRepository(name: EntityTarget<User>): Repository<User>{
    const repository: Repository<User> = getConnection().getRepository(name)
    return repository
  },

  async clear(): Promise<void> {
    const connection = getConnection()
    const entities = connection.entityMetadatas

    entities.forEach(async entity => {
      const repository = connection.getRepository(entity.name)
      await repository.query(`DELETE FROM ${entity.tableName}`)
    })
  }
}

export default connection