import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-of-products',
    pathMatch: 'full'
  },
  {
    path: 'list-of-products',
    loadChildren: () => import('./pages/list-of-products/list-of-products.module').then( m => m.ListOfProductsPageModule)
  },
  {
    path: 'product-detail/:sku',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
