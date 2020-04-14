import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/products/services/products.service';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
  products$ = this.productsService.products$;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}
}
