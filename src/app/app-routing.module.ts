import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearLayoutComponent } from './layout/clear-layout/clear-layout.component';
import { NotFoundLayoutComponent } from './layout/not-found-layout/not-found-layout.component';

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
      {
        path: 'user',
        loadChildren: () =>
          import('./pages/user/user.module').then((mod) => mod.UserModule),
      },
    ],
  },

  {
    path: '**',
    component: NotFoundLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
