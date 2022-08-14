import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfProductsPage } from './list-of-products.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfProductsPageRoutingModule {}
