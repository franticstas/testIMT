import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { UserInterface } from 'src/app/shared/types/user.interface';

import * as UserSelector from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  private readonly _unsubscribeAll$ = new Subject<void>();
  user: UserInterface | null = null;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(UserSelector.selectUser), takeUntil(this._unsubscribeAll$))
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.user = data[0];
          console.log(this.user);
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll$.next();
    this._unsubscribeAll$.complete();
  }
}
