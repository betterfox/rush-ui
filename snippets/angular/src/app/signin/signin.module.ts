import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninCardComponent } from './signin-card/signin-card.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { AppComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    SigninCardComponent,
    SigninFormComponent
  ],
  imports: [
    CommonModule,
    AppComponentsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
