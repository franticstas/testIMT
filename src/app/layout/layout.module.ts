import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearLayoutComponent } from './clear-layout/clear-layout.component';
import { RouterModule } from '@angular/router';
import { NotFoundLayoutComponent } from './not-found-layout/not-found-layout.component';

@NgModule({
  declarations: [ClearLayoutComponent, NotFoundLayoutComponent],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
