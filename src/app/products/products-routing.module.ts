import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListContainerComponent } from './containers/product-list-container/product-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
