import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { ViewDashboardListComponent } from './modules/dashboard/components/view-dashboard-list/view-dashboard-list.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { ViewRoomsListComponent } from './modules/rooms/components/view-rooms-list/view-rooms-list.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { ViewUsersListComponent } from './modules/users/component/view-users-list/view-users-list.component';
import { VerifyEmailComponent } from './modules/verify-email/verify-email.component';
import { DefaultComponent } from './shared/layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ViewDashboardListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        component: ViewUsersListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'rooms',
        component: ViewRoomsListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
