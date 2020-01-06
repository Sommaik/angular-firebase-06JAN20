import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { SimpleFormComponent } from './page/simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
