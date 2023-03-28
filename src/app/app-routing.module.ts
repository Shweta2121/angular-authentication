import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageFormComponent } from './component/dashboard-page-form/dashboard-page-form.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { SignUpFormComponent } from './component/sign-up-form/sign-up-form.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: '',
    component:LoginFormComponent
  },
  {
    path: 'login',
    component:LoginFormComponent
  },
  {
    path: 'signup',
    component:SignUpFormComponent
  },
  {
    path: 'dashboard',
    component:DashboardPageFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
