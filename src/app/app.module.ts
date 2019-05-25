import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReusableAuthFormsModule } from './reusable-auth-forms/reusable-auth-forms.module';
import { RouterModule, Routes } from '@angular/router';
import { VerifyOTPModule } from './verify-otp/verify-otp.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

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
    ShoppingCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
