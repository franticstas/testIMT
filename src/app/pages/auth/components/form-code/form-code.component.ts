import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-code',
  templateUrl: './form-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCodeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
