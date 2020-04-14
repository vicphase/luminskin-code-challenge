import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products$: Observable<Product[]> = this.apollo
    .watchQuery<{ products: Product[] }>({
      query: gql`
        {
          products {
            id
            title
            image_url
            price(currency: USD)
            product_options {
              title
              prefix
              suffix
              options {
                id
                value
              }
            }
          }
        }
      `,
    })
    .valueChanges.pipe(map((queryResult) => queryResult.data.products));
  constructor(private apollo: Apollo) {}
}
