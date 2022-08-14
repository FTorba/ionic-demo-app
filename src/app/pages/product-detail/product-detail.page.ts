import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiListItem } from 'src/app/interfaces/ApiListItem';
import { ApiAndStorageService } from 'src/app/services/api-and-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPage implements OnInit {

  product: ApiListItem = null;

  constructor(
    public apiStorage: ApiAndStorageService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      // console.log(params, 'params');
      this.apiStorage.initHeader({title: this.product?.name});

      // console.log(this.apiStorage.getProductsBySku(parseInt(params?.sku)), 'params');

      // this.apiStorage.get('api-data').then(value => {
      //   return this.search$.next(value); 
      // });
    });
  }

}
