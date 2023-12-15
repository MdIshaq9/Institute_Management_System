import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private _httpClient:HttpClient) { }

  getMail():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
}
