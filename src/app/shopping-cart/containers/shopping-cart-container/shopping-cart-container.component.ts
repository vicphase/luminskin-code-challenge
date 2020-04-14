import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.scss'],
})
export class ShoppingCartContainerComponent implements OnInit {
  @Output() closeShoppingCart = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
