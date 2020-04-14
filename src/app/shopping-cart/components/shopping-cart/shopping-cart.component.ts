import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() currencies: string[] = [];
  @Input() form: FormGroup;
  @Output() closeShoppingCart = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
