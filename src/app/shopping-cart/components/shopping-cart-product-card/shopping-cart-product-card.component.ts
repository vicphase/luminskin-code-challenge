import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-product-card',
  templateUrl: './shopping-cart-product-card.component.html',
  styleUrls: ['./shopping-cart-product-card.component.scss']
})
export class ShoppingCartProductCardComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
