import { Component, OnInit } from '@angular/core';
import { products } from '@app/products/data/products';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss'],
})
export class ProductListContainerComponent implements OnInit {
  products = products;

  constructor() {}

  ngOnInit(): void {}
}
