import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartContainerComponent } from './containers/shopping-cart-container/shopping-cart-container.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SharedModule } from '@app/shared/shared.module';
import { ShoppingCartProductCardComponent } from './components/shopping-cart-product-card/shopping-cart-product-card.component';


@NgModule({
  declarations: [ShoppingCartContainerComponent, ShoppingCartComponent, ShoppingCartProductCardComponent],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule
  ],
  exports: [ShoppingCartContainerComponent]
})
export class ShoppingCartModule { }
