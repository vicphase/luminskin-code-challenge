import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart-product-card',
  templateUrl: './shopping-cart-product-card.component.html',
  styleUrls: ['./shopping-cart-product-card.component.scss'],
})
export class ShoppingCartProductCardComponent {
  @Input() form: FormGroup;
  @Output() removeProduct = new EventEmitter<number>();

  add(): void {
    this.form.get('amount').patchValue(this.form.value.amount + 1);
  }

  remove(): void {
    this.form.get('amount').patchValue(this.form.value.amount - 1);
  }
}
