import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninCardComponent } from './signin-card/signin-card.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { AppComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SigninCardComponent,
    SigninFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppComponentsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
