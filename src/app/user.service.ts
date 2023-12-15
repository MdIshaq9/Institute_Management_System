import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:string = 'https://6128991386a213001729f9df.mockapi.io/test/v1/student'

  constructor(private _httpclient: HttpClient) { }

  getusers():Observable<any>{
    return this._httpclient.get(this.baseUrl)
  }

  createUser(data:any):Observable<any>{
    return this._httpclient.post(this.baseUrl,data)
  }

  getFilteredUsers(term:string):Observable<any>{
    return this._httpclient.get(this.baseUrl + "?filter="+term)
  }

  getSortedUsers(column:string, order:string):Observable<any>{
    return this._httpclient.get(this.baseUrl + "?sortBy="+column+"&order="+order);
  }

  getPagedUsers(pageno:number):Observable<any>{
    return this._httpclient.get(this.baseUrl + "?limit=10&page="+pageno)
  }

  deleteUser(id:string):Observable<any>{
    return this._httpclient.delete(this.baseUrl+"/"+id)
  }
  getUser(id:number):Observable<any>{
    return this._httpclient.get(this.baseUrl+"/"+id);
  }

  editUser(id:any,data:any):Observable<any>{
    return this._httpclient.put(this.baseUrl+"/"+id,data);
  }
}
