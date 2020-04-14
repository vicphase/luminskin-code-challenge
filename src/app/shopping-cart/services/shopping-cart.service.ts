import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '@app/products/models/product.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  openShoppingCartSubject = new BehaviorSubject<boolean>(false);
  openShoppingCart$ = this.openShoppingCartSubject.asObservable();

  currencies$: Observable<string[]> = this.apollo
    .watchQuery<{ currency: string[] }>({
      query: gql`
        {
          currency
        }
      `,
    })
    .valueChanges.pipe(map((response) => response.data.currency));

  form = this.fb.group({
    currency: 'USD',
    products: this.fb.group({}),
  });

  get productsForm(): FormGroup {
    return this.form.get('products') as FormGroup;
  }

  constructor(private apollo: Apollo, private fb: FormBuilder) {}

  addToCart(product: Product): void {
    const control = this.productsForm.get(String(product.id)) as FormGroup;

    control
      ? control.get('amount').patchValue(control.value.amount + 1)
      : this.productsForm.addControl(
          String(product.id),
          this.createProductControl(product)
        );

    this.openShoppingCartSubject.next(true);
  }

  createProductControl(product: Product): FormGroup {
    const { id, title, image_url, price } = product;
    return this.fb.group({
      id,
      title,
      image_url,
      price,
      amount: 1,
    });
  }

  removeProduct(id: number): void {
    this.productsForm.removeControl(String(id));
  }
}
