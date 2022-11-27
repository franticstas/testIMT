import { createSelector } from '@ngrx/store';
import { UserResponseInterface } from 'src/app/shared/types/response.interface';
import { UserDataStateInterface } from 'src/app/shared/types/state.interface';

export interface UserState {
  users: UserDataStateInterface;
}

const selectUsers = (state: UserState) => state.users;

export const selectUser = createSelector(
  selectUsers,
  (state: UserDataStateInterface) => state.usersList
);
