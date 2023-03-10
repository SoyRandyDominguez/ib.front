import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      component: LoginComponent,
      data: {
          title: 'Login'
      }
  }
  ,{
      path: 'register',
      component: RegisterComponent,
      data: {
          title: 'Sign Up'
      }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
