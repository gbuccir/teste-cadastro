import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RegistrationComponent } from './users/registration/registration.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: { breadcrumb: 'Users' },

    // children: [
    //   {
    //     path: 'new',
    //     component: RegistrationComponent
    //   },
    // ]
  },
  {
    path: 'users/new',
    component: RegistrationComponent,
    data: { breadcrumb: 'New' },

  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
