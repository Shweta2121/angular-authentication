import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { SignUpFormComponent } from './component/sign-up-form/sign-up-form.component';
import { DashboardPageFormComponent } from './component/dashboard-page-form/dashboard-page-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpFormComponent,
    DashboardPageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastrModule,
    BrowserAnimationsModule
  ],
  // exports:[
  //   ToastrModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
