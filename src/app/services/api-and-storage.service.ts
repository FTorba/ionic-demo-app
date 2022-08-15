import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { ApiListItem } from '../interfaces/ApiListItem';
import { NavigationConfig } from '../interfaces/NavigationConfig';

@Injectable({
  providedIn: 'root'
})
export class ApiAndStorageService {

  public search$ = new Subject<string>();
  public storageInitialization$ = new Subject<boolean>();
  public _storage: Storage | null = null;
  public headerConfig: NavigationConfig = null;
  public apiItems: ApiListItem[] = [];

  constructor(
    private storage: Storage,
    public http: HttpClient
  ) {
    this.initStorage();
  }

  // ----------- Storage Methods -------------

  async initStorage() {
    this.storage.create().then(storageObj => {
      // init storage instance
      this._storage = storageObj;

      this.storageInitialization$.next(true);

      // get value of previuosly saved search work or sentence
      this.get('searchValue').then(value => {
        this.search$.next(value); 
      });

      // if (this.apiItems.length === 0) {
        // this.getApiItems();
      // }
    })
  }

  // filter items by "name" field and search field value
  public filterApiItems(items: ApiListItem[], keyword: string): ApiListItem[] {
    return items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
  }

  public set(key: string, value: any): void {
    console.log(key, 'set storage');
    this._storage?.set(key, value);
  }

  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // ----------- API-like requests -------------

  public getProductsList(): Observable<any> {
    return this.http.get(environment.listOfProductsPath);
  }

  public getProductsBySku(items: Array<ApiListItem> = [], sku: number): ApiListItem {
    let item = {};
    if (items.length > 0) {
      console.log('sku', sku);
      item = items.filter(itemInstance => {itemInstance.sku === sku});
    }
    return typeof item[0] !== 'undefined' ? item[0] : item;
  }

  // ----------- Other methods -------------

  public initHeader({title = '', showSearchBar = false, previousSearchValue = ''} = {}): void {
    this.headerConfig = {... {title, showSearchBar, previousSearchValue}};
  }

}
