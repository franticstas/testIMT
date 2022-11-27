import { Action, createReducer, on } from '@ngrx/store';
import { UserDataStateInterface } from 'src/app/shared/types/state.interface';
import * as UserActions from '../actions/user.actions';

const initialState: UserDataStateInterface = {
  userList: [],
};

const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, () => ({ ...initialState })),
  on(UserActions.getUserSuccess, (state, { userData }) => ({
    ...state,
    userList: userData.results,
  }))
);

export function reducer(
  state: UserDataStateInterface | undefined,
  action: Action
) {
  return userReducer(state, action);
}
