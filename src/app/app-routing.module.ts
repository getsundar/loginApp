import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LoginFormComponent
} from './components/login-form/login-form.component';
export const routes: Routes = [{
  path: '',
  component: LoginFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
