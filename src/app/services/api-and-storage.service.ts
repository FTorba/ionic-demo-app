import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';

import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { ApiListItem } from '../interfaces/ApiListItem';

@Injectable({
  providedIn: 'root'
})
export class ApiAndStorageService {

  public search$ = new Subject<string | ApiListItem>();

  public _storage: Storage | null = null;

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

      // get value of previuosly saved search work or sentence
      this.get('searchValue').then(value => {
        this.search$.next(value); 
      });
    })
  }

  public filterApiItems(items: ApiListItem[], keyword: string): ApiListItem[] {
    return items.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value).then(data => {
      console.log('set key', data);
    });
  }

  public async get(key: string): Promise<string | ApiListItem> {
    return await this._storage?.get(key);
  }

  // ----------- API-like requests -------------

  public getProductsList(): Observable<any> {
    return this.http.get(environment.listOfProductsPath).pipe();
  }

}
