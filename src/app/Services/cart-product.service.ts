import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ProductCart } from '../Models/ProductCart';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor(private http:HttpClient) { }
  returnAllProductInSpecificCart(cartID:number):Observable<ProductCart[]>
  {
    let _url=`http://localhost:54827/api/CartProducts/${cartID}`;
     return this.http.get<ProductCart[]>(_url).pipe(catchError((err)=>
      {    
        return throwError(err.message ||"Internal Server error Plz Try Again");
      }));
  }
}