import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreResponse } from 'src/app/types/store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  _store_api: string = 'https://fakestoreapi.com/products';
  _store: StoreResponse[] = [];

  constructor(private http: HttpClient) {
    this.getStoreApi();
  }

  get store() {
    return this._store;
  }

  getStoreApi() {
    this.http.get<StoreResponse[]>(this._store_api).subscribe((data) => {
      this._store = data;
    });
  }
}
