import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';import { ProductWishList } from '../Models/ProductWishList';

@Injectable({
  providedIn: 'root'
})
export class WishlistProductService {

  constructor(private http:HttpClient) { }
  returnAllProductInSpecificWishList(wishListID:number):Observable<ProductWishList[]>
  {
    let _url=`http://localhost:54827/api/ProductWishlist/${wishListID}`;
     return this.http.get<ProductWishList[]>(_url).pipe(catchError((err)=>
      {    
        return throwError(err.message ||"Internal Server error Plz Try Again");
      }));
  }
}