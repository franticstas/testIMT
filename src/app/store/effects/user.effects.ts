import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      switchMap(() => {
        return this.userService.getUser().pipe(
          map((userData) => {
            console.log(userData);

            return UserActions.getUserSuccess({ userData });
          }),
          catchError(() => {
            return of(UserActions.getUserFailure());
          })
        );
      })
    )
  );
}
