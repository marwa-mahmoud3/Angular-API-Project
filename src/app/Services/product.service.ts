import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {IProduct} from 'src/app/Models/Product';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  cat:IProduct;
  _url='http://localhost:54827/api/Products';
  returnAllProducts():Observable<IProduct[]>
  {    
    console.log(this.http.get<IProduct[]>(this._url));
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Server Has Error Plz Try Again");
    }));
  
}
getProductById(id:any):Observable<IProduct>
{
  return this.http.get<IProduct>(this._url+'/'+id).pipe(catchError((err)=>
  {
    return throwError(err.message ||"Internal Server error Plz Try Again");
  }));
}
}