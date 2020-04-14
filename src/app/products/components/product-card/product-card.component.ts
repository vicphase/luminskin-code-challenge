import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@app/products/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();
}
