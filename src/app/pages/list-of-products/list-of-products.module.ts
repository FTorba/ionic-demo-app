import { NgModule } from '@angular/core';
import { ListOfProductsPageRoutingModule } from './list-of-products-routing.module';

import { ListOfProductsPage } from './list-of-products.page';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ListOfProductsPageRoutingModule
  ],
  declarations: [ListOfProductsPage]
})
export class ListOfProductsPageModule {}
