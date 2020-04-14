import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ShoppingCartService } from '@app/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.scss'],
})
export class ShoppingCartContainerComponent implements OnInit {
  currencies$ = this.shoppingCartService.currencies$;
  @Output() closeShoppingCart = new EventEmitter<void>();

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}
}
