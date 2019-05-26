import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './number-only.directive';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule
  ],
  exports: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
