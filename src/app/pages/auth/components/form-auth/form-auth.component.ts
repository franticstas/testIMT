import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAuthComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
