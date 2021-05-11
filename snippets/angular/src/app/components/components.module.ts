import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { SeparateLineWithTextComponent } from './separate-line-with-text/separate-line-with-text.component';
import { ButtonSocialSigninComponent } from './button-social-signin/button-social-signin.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  declarations: [
    InputComponent,
    ButtonLoadingComponent,
    SeparateLineWithTextComponent,
    ButtonSocialSigninComponent
  ],
  exports: [
    InputComponent,
    ButtonLoadingComponent,
    SeparateLineWithTextComponent,
    ButtonSocialSigninComponent
  ]
})
export class AppComponentsModule { }
