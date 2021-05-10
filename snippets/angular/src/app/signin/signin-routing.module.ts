import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninCardComponent } from './signin-card/signin-card.component';

const routes: Routes = [{
  path: '',
  component: SigninCardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
