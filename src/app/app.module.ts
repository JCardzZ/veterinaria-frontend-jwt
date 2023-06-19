import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListComponent } from './pet/list.component';
import { DetailComponent } from './pet/detail.component';
import { CreateComponent } from './pet/create.component';
import { UpdateComponent } from './pet/update.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { MenuComponent } from './menu/menu.component';



// external lib
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PetInterceptor } from './interceptors/pet.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [
   { provide: HTTP_INTERCEPTORS, useClass: PetInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
