import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiListItem } from 'src/app/interfaces/ApiListItem';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPage implements OnInit {

  product: ApiListItem = null;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => this.product = params['productData']);
  }

}
