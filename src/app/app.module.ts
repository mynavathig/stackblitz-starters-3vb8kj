import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [MainComponent,
                LoginComponent],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }