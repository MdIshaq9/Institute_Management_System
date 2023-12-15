import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl: string = 'https://www.boredapi.com/api/activity'
  constructor(private _httpClient:HttpClient) { }

  getActivity():Observable<any>{
    return this._httpClient.get(this.baseUrl)  }
}

