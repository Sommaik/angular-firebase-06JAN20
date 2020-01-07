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
import { GroupFormComponent } from './page/group-form/group-form.component';
import { ListDataComponent } from './page/list-data/list-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './shared/highlight.directive';
import { TrimCreditPipe } from './shared/trim-credit.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleFormComponent,
    GroupFormComponent,
    ListDataComponent,
    HighlightDirective,
    TrimCreditPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
