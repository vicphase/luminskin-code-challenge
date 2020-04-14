import { Component } from '@angular/core';
import { ProductsService } from '@app/products/services/products.service';
import { ShoppingCartService } from '@app/shopping-cart/services/shopping-cart.service';
import { Product } from '@app/products/models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent {
  products$ = this.productsService.products$;
  constructor(
    private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) {}

  addToCart(product: Product): void {
    this.shoppingCartService.addToCart(product);
  }
}
