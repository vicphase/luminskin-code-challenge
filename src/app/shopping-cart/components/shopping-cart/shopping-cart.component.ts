import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  @Input() currencies: string[] = [];
  @Input() form: FormGroup;
  @Output() closeShoppingCart = new EventEmitter<void>();
  @Output() removeProduct = new EventEmitter<number>();

  get productsForm(): FormGroup {
    return this.form.get('products') as FormGroup;
  }

  get emptyCart(): boolean {
    return !Object.keys(this.productsForm.value).length;
  }
}
