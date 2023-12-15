import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private baseUrl: string = 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'

  constructor(private _httpClient: HttpClient) { }
  
  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  createVehicles(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl,data);
  }

}
