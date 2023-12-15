import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountsService {
  private baseUrl: string = 'https://6128991386a213001729f9df.mockapi.io/test/v1/principals';

  constructor(private _httpClient:HttpClient) { }

  getAccounts():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  createAccounts(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data)
  }
}
