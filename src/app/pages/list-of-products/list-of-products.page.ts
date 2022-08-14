import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiListItem } from 'src/app/interfaces/ApiListItem';
import { ApiAndStorageService } from 'src/app/services/api-and-storage.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.page.html',
  styleUrls: ['./list-of-products.page.scss']
})
export class ListOfProductsPage implements OnInit {

  products: ApiListItem[] = [];
  filteredProducts: ApiListItem[] = [];
  searchSubscribe: Subscription;
  previousSearchValue: string = '';

  constructor(
    public router: Router,
    public apiStorage: ApiAndStorageService
  ) { }

  ngOnInit(): void {
    // Receive value from search field. After page reload saved value from previous search will be in use ("initStorage" method from "ApiAndStorageService")
    this.searchSubscribe = this.apiStorage.search$.subscribe( 
      next => {
        this.filteredProducts = this.apiStorage.filterApiItems(this.products, next);
        this.previousSearchValue = next;
        this.initHeader();
      }
    )
    this.getProducts();
  }

  initHeader(): void {
    this.apiStorage.initHeader({title: 'Search', showSearchBar: true, previousSearchValue: this.previousSearchValue});
  }

  ionViewWillEnter(): void {
    this.initHeader();
  }
  

  // Get products list from .json-file
  getProducts(): void {
    this.apiStorage.getProductsList().subscribe(
      (data: ApiListItem[]) => {
        this.products = [...data];
        this.apiStorage.set('api-data', this.products);
        this.apiStorage.apiItems = this.products;
      },
      error => {
        console.log(error, 'error')
      }
    )
  }
  
  ngOnDestroy(): void {
    this.searchSubscribe.unsubscribe();
  }
}
