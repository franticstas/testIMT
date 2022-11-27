import { Action, createReducer, on } from '@ngrx/store';
import { UserResponseInterface } from 'src/app/shared/types/response.interface';
import { UserDataStateInterface } from 'src/app/shared/types/state.interface';
import * as UserActions from '../actions/user.actions';

const initialState: UserDataStateInterface = {
  usersList: [],
};

const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, () => ({ ...initialState })),
  on(UserActions.getUserSuccess, (state, { userData }) => ({
    ...state,
    usersList: userData.results,
  }))
);

export function reducer(
  state: UserDataStateInterface | undefined,
  action: Action
) {
  return userReducer(state, action);
}
