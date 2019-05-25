import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-svsudo-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnChanges {

  @Input()
  title = '';
  @Input()
  subtitle;
  @Input()
  continueLabel: string;
  @Input()
  showShadowForProduct = false;
  @Input()
  showShadowForMainContent = false;
  @Input()
  productList: any[];
  constructor() { }

  ngOnChanges() {
    if (typeof this.showShadowForProduct === 'string') {
      this.showShadowForProduct = this.convertToBoolean(this.showShadowForProduct);
      console.log(typeof this.showShadowForProduct);
    }
    if (typeof this.showShadowForMainContent === 'string') {
      this.showShadowForMainContent = this.convertToBoolean(this.showShadowForMainContent);
      console.log(typeof this.showShadowForMainContent);
    }
  }

  convertToBoolean(str: string) {
    if (str.toLocaleLowerCase() === 'true') {
      return true;
    } else {
      return false;
    }
  }

  eachProductTotalCost(product): number {
    return product.selectedItemCount * product.costPerItem;
  }
}
