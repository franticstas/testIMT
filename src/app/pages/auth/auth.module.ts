import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { FormCodeComponent } from './components/form-code/form-code.component';



@NgModule({
  declarations: [
    SignInComponent,
    FormAuthComponent,
    FormCodeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
