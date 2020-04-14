import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
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
    currency: null,
    products: this.fb.group({}),
  });
  constructor(private apollo: Apollo, private fb: FormBuilder) {}
}
