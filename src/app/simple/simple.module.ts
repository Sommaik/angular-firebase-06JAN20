import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleRoutingModule } from './simple-routing.module';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SimpleFormComponent,
    GroupFormComponent
  ],
  imports: [
    CommonModule,
    SimpleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SimpleModule { }
