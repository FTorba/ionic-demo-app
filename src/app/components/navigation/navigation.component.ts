import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAndStorageService } from 'src/app/services/api-and-storage.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(
    public apiStorage: ApiAndStorageService
  ) { }

  ngOnInit() {
    // console.log(this.apiStorage._storage?.keys());
    // this.apiStorage.get('searchValue').then(value => {
    //   console.log(value, 'searchValue');
    // });
    
  }

  searchValueChanged(ev: Event) {
    const value = typeof ev['detail'] !== 'undefined' ? (typeof ev['detail']['value'] !== 'undefined' ? ev['detail']['value'] : '') : '';
    console.log(value, 'value');
    this.apiStorage.search$.next(value);
    this.apiStorage.set('searchValue', value);
  }

}
