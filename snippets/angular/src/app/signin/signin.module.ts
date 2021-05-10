import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninCardComponent } from './signin-card/signin-card.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';


@NgModule({
  declarations: [
    SigninCardComponent,
    SigninFormComponent,
    FormInputComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
