import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserDataStateInterface } from 'src/app/shared/types/state.interface';

import * as UserActions from 'src/app/store/actions/user.actions';
import * as UserSelector from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit, OnDestroy {
  isFormSend = false;
  email = '';

  private readonly _unsubscribeAll$ = new Subject<void>();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }

  submitForm(data: string): void {
    this.email = data;
    this.isFormSend = true;
  }

  submitCode(): void {
    this.store.dispatch(UserActions.getUser());
  }
}
