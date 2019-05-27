#Shopping Cart Angular UI component
###Module 

```bash
import {ShoppingCartModule} from 'shopping-cart-angular-ui';
```

###Include in module Section
```bash
imports: [
    ....
    ShoppingCartModule
]
```

###Selector

```bash
<app-svsudo-shopping-cart></app-svsudo-shopping-cart>
```

###Input Parameters
```bash
title: string -> Title on the top of page.
subtitle: string -> subtitle to be shown.
continueLabel: string - button label for continue shopping
showShadowForProduct: boolean -> decide weather to background shadow for each product in the list.
showShadowForMainContent: boolean -> decide weather to background shadow for main section of page.
currency: string -> what type of currency using for this cart list.
shippingCost: number -> Shipping cost for a particular place.
taxPercentage: number -> total tax percentage for customers.
checkOutLabel: string ->  label for checkout button.
messageForNoItems: string -> Message to show when the cart dont have any selected products.
productList: Array of product Objects -> List of products selected by customer. (Each Product should have minimum of values mentioned in Product structure section in this readme file).
```
###Each Product Structure.
```bash
    id: string -> Unique value for each selected product.
    name: string -> Name of product.
    selectedItemCount: number -> User Selected same product count.
    costPerItem: number -> Cost of each selected product.
    stockStatus: 'IN'/'OUT' -> Weather the stock exist or not. (Please use the enum mentioned below for stockstatus).
    imgURL: string -> Use either http URL or relative Path.
```

###STOCK_STATUS enum import
```bash
    import {STOCK_STATUS} from 'shopping-cart-angular-ui';
```
###STOCK_STATUS enum Usage
```bash
    Use any of the following value
    STOCK_STATUS.IN -> The products which are in stock.
    STOCK_STATUS.OUT -> The products which are out of stock.
```
###Output Parameters
```bash
continue: void -> Event emitted when user clicks on contine button.
checkout -> Event Emitted when user clicks on checkout button with all the updated data as mentioned is checkout emitted info section below.
```

###Checkout-emitted-info 

```bash
    productList: Holds list of products with updated values.
    subTotal: Holds sub-total of all products excluding tax and shipping
    totoalCost: Holds totoal cost of all products including sub-total, shipping, tax.
    totalTax: Holds the tax value on total bill not in percentage.
```

###Example Usage 
```bash
    <app-svsudo-shopping-cart 
            title="Shopping cart name" 
            subtitle="sub title"
            continueLabel="contine Shopping"
            showShadowForProduct="true"
            showShadowForMainContent="true"
            currency="$"
            shippingCost="50"
            taxPercentage="5"
            checkOutLabel="checkout"
            messageForNoItems="No Items in cart"
            [productList]="productList"
            (checkout)="checkout($event)"
            (continue)="continue($event)"></app-svsudo-shopping-cart>
```

```bash
    Emitted checkout and continue button events should be handled by developer in there respective components.
```
###Sample Output
![sample_shopping_cart](https://user-images.githubusercontent.com/46681863/58400826-d4236b80-8079-11e9-8c6f-26948ef928d8.png)

