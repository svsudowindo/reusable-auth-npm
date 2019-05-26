import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

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
  @Input()
  currency;
  @Input()
  shippingCost: number;
  @Input()
  taxPercentage: number;
  @Input()
  checkOutLabel: string;
  @Input()
  messageForNoItems: string;
  subTotal: number;
  totalCost: number;
  totalTax: number;
  @Output()
  checkout: EventEmitter<any> = new EventEmitter();
  @Output()
  continue: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnChanges() {
    if (typeof this.showShadowForProduct === 'string') {
      this.showShadowForProduct = this.convertToBoolean(this.showShadowForProduct);
    }
    if (typeof this.showShadowForMainContent === 'string') {
      this.showShadowForMainContent = this.convertToBoolean(this.showShadowForMainContent);
    }
    if (typeof this.shippingCost === 'string') {
      this.shippingCost = parseInt(this.shippingCost, 10);
    }
    if (typeof this.taxPercentage === 'string') {
      this.shippingCost = parseInt(this.taxPercentage, 10);
    }
    this.calculateSubTotal();
  }

  convertToBoolean(str: string) {
    if (str.toLocaleLowerCase() === 'true') {
      return true;
    } else {
      return false;
    }
  }

  eachProductCost(product): number {
    return product.selectedItemCount * product.costPerItem;
  }

  selectedItemChange(ev: KeyboardEvent) {
    const regex = new RegExp(/^[0-9]/);
    if (regex.test(ev.key) || ev.keyCode === 8) {
      // update amount of the product
      this.productList = this.productList;
      this.calculateSubTotal();
    }
  }

  calculateSubTotal() {
    this.subTotal = 0;
    let subTotalAmount = 0;
    for (let i = 0; i < this.productList.length; i++) {
      subTotalAmount = subTotalAmount + this.eachProductCost(this.productList[i]);
    }
    this.subTotal = subTotalAmount;
    this.calculateTaxCost();
  }

  calculateTaxCost() {
    this.totalTax = ((this.taxPercentage * this.subTotal) / 100);
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    this.totalCost = this.subTotal + this.shippingCost + this.totalTax;
  }

  checkoutEmitter() {
    const totalDetails = {
      productList: this.productList,
      totalCost: this.totalCost,
      subTotal: this.subTotal,
      totalTax: this.totalTax
    };
    this.checkout.emit(totalDetails);
  }
  continueEmitter() {
    this.continue.emit();
  }

  deleteProduct(productIndex) {
    if (this.productList && this.productList.length > 0) {
        this.productList.splice(productIndex, 1);
      this.calculateSubTotal();
    }
  }
}
