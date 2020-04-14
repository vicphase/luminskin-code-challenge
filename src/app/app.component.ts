import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { filter } from 'rxjs/operators';

import { ShoppingCartService } from './shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCartService.openShoppingCart$
      .pipe(filter((value) => value))
      .subscribe(() => this.sidenav.open());
  }

  close(): void {
    this.sidenav.close();
  }
}
