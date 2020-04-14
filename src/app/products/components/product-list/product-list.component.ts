import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@app/products/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: Product[];
  @Output() addToCart = new EventEmitter<Product>();
}
