import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListOfProductsPageRoutingModule } from './list-of-products-routing.module';

import { ListOfProductsPage } from './list-of-products.page';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListOfProductsPageRoutingModule
  ],
  declarations: [NavigationComponent, ListOfProductsPage]
})
export class ListOfProductsPageModule {}
