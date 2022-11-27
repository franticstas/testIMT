import { UserInterface } from './user.interface';

export interface UserDataStateInterface {
  userList: UserInterface[] | null;
}

export interface AppStateInterface {
  user: UserDataStateInterface;
}
