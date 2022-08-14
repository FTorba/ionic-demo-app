import { NgModule } from '@angular/core';
import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { SharedModule } from 'src/app/modules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProductDetailPageRoutingModule
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
