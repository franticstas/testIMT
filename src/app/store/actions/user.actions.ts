import { createAction, props } from '@ngrx/store';
import { UserResponseInterface } from 'src/app/shared/types/response.interface';

export const getUser = createAction('[User] Get user');

export const getUserSuccess = createAction(
  '[User] Get user success',
  props<{ userData: UserResponseInterface }>()
);

export const getUserFailure = createAction('[User] Get user failure');
