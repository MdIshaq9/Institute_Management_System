import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  private baseUrl:string = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) { }
  getItems():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
}
