import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import * as UserActions from '../actions/user.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}

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

  getUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.getUserSuccess),
        tap(() => {
          this.router.navigate(['/user']);
        })
      ),
    { dispatch: false }
  );
}
