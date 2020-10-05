import { User } from "./User";

export interface DownloadUsers {
  download: () => Promise<User[]>
}