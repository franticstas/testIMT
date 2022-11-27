import { createSelector } from '@ngrx/store';
import { UserResponseInterface } from 'src/app/shared/types/response.interface';

export interface UserState {
  users: UserResponseInterface;
}

const selectUsers = (state: UserState) => state.users;

export const selectUser = createSelector(
  selectUsers,
  (state: UserResponseInterface) => state.results
);
