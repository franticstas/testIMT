import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found-layout',
  templateUrl: './not-found-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
