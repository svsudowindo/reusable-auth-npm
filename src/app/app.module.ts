import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableAuthFormsModule } from './reusable-auth-forms/reusable-auth-forms.module';
import { RouterModule, Routes } from '@angular/router';
import { VerifyOTPModule } from './verify-otp/verify-otp.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CardListModule } from 'projects/card-list/src/public_api';
const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReusableAuthFormsModule,
    RouterModule.forRoot(routes),
    VerifyOTPModule,
    ShoppingCartModule,
    CardListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
