import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService, CookieOptions } from 'angular2-cookie/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilterComponent } from './shared/filter/filter.component';


import { HomeComponent } from './modules/home/home.component';
import { CollegesListComponent } from './modules/colleges/colleges-list/colleges-list.component';
import { CollegesDetailsComponent } from './modules/colleges/colleges-details/colleges-details.component';
import { CollegesComponent } from './modules/colleges/colleges.component';
import { CourseComponent } from './shared/popup/course/course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { LoginRegisterComponent } from './shared/popup/login-register/login-register.component';
import { LoginComponent } from './shared/popup/login-register/login/login.component';
import { RegisterComponent } from './shared/popup/login-register/register/register.component';

import * as $ from 'jquery';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { OnConstructionComponent } from './on-construction/on-construction.component';
import { TopExamsComponent } from './top-exams/top-exams.component';
import { Comedk2020Component } from './comedk2020/comedk2020.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    HomeComponent,
    CollegesListComponent,
    CollegesDetailsComponent,
    CollegesComponent,
    CourseComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent,
    OnConstructionComponent,
    TopExamsComponent,
    Comedk2020Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [ CookieService,
    { provide: CookieOptions, useValue: {} },],
  bootstrap: [AppComponent],
  entryComponents: [CourseComponent, LoginRegisterComponent]
})
export class AppModule { }
