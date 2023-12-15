import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  private baseUrl: string = 'https://api.imgflip.com/get_memes'
  constructor(private _httpClient:HttpClient) { }

  getMemes():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
}
