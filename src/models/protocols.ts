import { User } from "./User";

export interface DownloadUsers {
  download: (uri: String) => Promise<User[]>
}