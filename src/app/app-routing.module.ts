import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearLayoutComponent } from './layout/clear-layout/clear-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClearLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((mod) => mod.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
