import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { GroupFormComponent } from './group-form/group-form.component';


const routes: Routes = [
  { path: 'simple-form', component: SimpleFormComponent},
  { path: 'group-form', component: GroupFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleRoutingModule { }
