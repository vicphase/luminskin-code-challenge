import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '@app/products/models/product.model';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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
    subtotal: null,
    products: this.fb.group({}),
  });

  get productsForm(): FormGroup {
    return this.form.get('products') as FormGroup;
  }

  constructor(private apollo: Apollo, private fb: FormBuilder) {
    this.productsForm.valueChanges.subscribe((products) =>
      this.form.get('subtotal').patchValue(this.calculateSubtotal(products))
    );

    this.form
      .get('currency')
      .valueChanges.pipe(
        switchMap((currency) =>
          this.apollo
            .watchQuery<{ products: Product[] }>({
              query: gql`
          {
            products {
              id
              price(currency: ${currency})
            }
          }
        `,
            })
            .valueChanges.pipe(
              map((queryResult) => queryResult.data.products),
              catchError(() => of([]))
            )
        )
      )
      .subscribe((products) => this.setCurrentPrice(products));
  }

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
    const formGroup = this.fb.group({
      id,
      title,
      image_url,
      price,
      amount: 1,
      subtotal: price,
    });

    formGroup
      .get('amount')
      .valueChanges.pipe()
      .subscribe((productAmount) => {
        if (productAmount < 1) {
          this.removeProduct(formGroup.value.id);
        }
        formGroup
          .get('subtotal')
          .patchValue(productAmount * formGroup.value.price);
      });

    formGroup
      .get('price')
      .valueChanges.pipe()
      .subscribe((productPrice) =>
        formGroup
          .get('subtotal')
          .patchValue(formGroup.value.amount * productPrice)
      );
    return formGroup;
  }

  removeProduct(id: number): void {
    this.productsForm.removeControl(String(id));
  }

  calculateSubtotal(products: Record<string, Product>): number {
    return Object.values(products)
      .map((product) => product.subtotal)
      .reduce((a, b) => a + b, 0);
  }

  setCurrentPrice(products: Product[]): void {
    products
      .filter((product) => this.productsForm.get(String(product.id)))
      .forEach((product) =>
        this.productsForm
          .get(String(product.id))
          .get('price')
          .patchValue(product.price)
      );
  }
}
