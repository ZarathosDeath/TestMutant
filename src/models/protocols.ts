import { UserParams, User } from "./User";
import { RegularUser } from "./RegularUser";

export interface DownloadUsers {
  download: () => Promise<RegularUser[]>
}

export interface SaveUsers {
  save: () => Promise<void>
}