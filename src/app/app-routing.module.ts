import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './page/user/user.component';
import { HomeComponent } from './page/home/home.component';
import { ListDataComponent } from './page/list-data/list-data.component';
import { UserFormComponent } from './page/user-form/user-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'list-data', component: ListDataComponent
  },
  {
    path: 'user-form', component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
