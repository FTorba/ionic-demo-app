import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiListItem } from 'src/app/interfaces/ApiListItem';
import { ApiAndStorageService } from 'src/app/services/api-and-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss']
})
export class ProductDetailPage implements OnInit {

  product: ApiListItem = null;
  storageInitSubscription: Subscription = null;
  slug: string = '';

  constructor(
    public apiStorage: ApiAndStorageService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRouterData();
    this.listenStorageInitialization();
  }

  getRouterData(): void {
    this.router.params.subscribe((params: Params) => {
      this.slug = params?.slug;
      this.getProductData();
    });
  }

  listenStorageInitialization(): void {
    this.storageInitSubscription = this.apiStorage.storageInitialization$.subscribe(
      next => {
        this.getProductData();
      }, 
      error => {
        console.log('show generic error');
      }
    );
  }

  getProductData(): void {
    if (this.apiStorage._storage) {
      this.apiStorage.get('api-data').then(
        items => {
          console.log('items getApiItems', items);
          // this.apiItems = items;
          // console.log(this.apiStorage.getProductsBySku(items, parseInt(params?.sku)), 'params');

          // this.apiStorage.initHeader({title: this.product?.name});
        },
        error => {
          console.log('items getApiItems', error);
        }
      );
    }
  }

  ngOnDestroy() {
    this.storageInitSubscription.unsubscribe();
  }

}
