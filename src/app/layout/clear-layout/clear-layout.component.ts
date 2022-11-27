import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-layout',
  templateUrl: './clear-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClearLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
