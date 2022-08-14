import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiListItem } from 'src/app/interfaces/ApiListItem';
import { ApiAndStorageService } from 'src/app/services/api-and-storage.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.page.html',
  styleUrls: ['./list-of-products.page.scss']
})
export class ListOfProductsPage implements OnInit {

  products: ApiListItem[] = [];
  searchSubscribe: Subscription;

  constructor(
    public router: Router,
    public apiStorage: ApiAndStorageService
    ) { }

  ngOnInit(): void {
    this.searchSubscribe = this.apiStorage.search$.subscribe( 
      next => {
        console.log(next, 'next');
      }
    )
    this.getProducts();
  }

  getProducts(): void {
    this.apiStorage.getProductsList().subscribe(
      (data: ApiListItem[]) => {
        this.products = [...data];
      },
      error => {
        console.log(error, 'error')
      }
    )
  }

  goToProductPage(page: string, productData: ApiListItem): void {
    this.router.navigate([page, {productData}]);
  }

  ngOnDestroy() {
    this.searchSubscribe.unsubscribe();
  }
}
