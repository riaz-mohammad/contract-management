import { SharedModule } from './shared/shared.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './app-components/navigation/navigation.component';
import { BannerComponent } from './app-components/banner/banner.component';
import { LoginComponent } from './app-components/login/login.component';
import { LogoutModalComponent } from './shared/logout-modal/logout-modal.component';







@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
