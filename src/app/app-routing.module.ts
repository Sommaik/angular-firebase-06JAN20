import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './page/user/user.component';
import { HomeComponent } from './page/home/home.component';
import { ListDataComponent } from './page/list-data/list-data.component';
import { UserFormComponent } from './page/user-form/user-form.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { SigninWithPhoneComponent } from './page/signin-with-phone/signin-with-phone.component';
import { AuthGuard } from './shared/auth.guard';
import { MenuComponent } from './page/menu/menu.component';
import { ProductComponent } from './page/product/product.component';
import { ProductFormComponent } from './page/product-form/product-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signin-with-phone',
    component: SigninWithPhoneComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'user', component: UserComponent
      },
      {
        path: 'simple',
        loadChildren: './simple/simple.module#SimpleModule'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'list-data', component: ListDataComponent
      },
      {
        path: 'user-form', component: UserFormComponent
      },
      {
        path: 'menu', component: MenuComponent
      },
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'product-form', component: ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
