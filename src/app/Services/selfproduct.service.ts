import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from '../Models/Product';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SelfproductService {
  returnAllProductsByCategoryID(CatID:number):Observable<IProduct[]>
  {
    let url=`http://localhost:54827/api/CategoryProduct/${CatID}`;
    return this.http.get<IProduct[]>(url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Server Has Error Plz Try Again");
    }));
  }
  constructor(private http: HttpClient) { }
  _url='http://localhost:54827/api/CategoryProduct';
  returnAllProducts():Observable<IProduct[]>
  {
     
    console.log(this.http.get<IProduct[]>(this._url));
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Server Has Error Plz Try Again");
    }));
  
  }
}
