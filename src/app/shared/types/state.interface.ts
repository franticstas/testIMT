import { UserInterface } from './user.interface';

export interface UserDataStateInterface {
  usersList: UserInterface[] | null;
}

export interface AppStateInterface {
  user: UserDataStateInterface;
}
