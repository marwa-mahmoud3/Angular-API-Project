import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Cart } from '../Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
url='http://localhost:54827/api/Cart';
  constructor(private http:HttpClient) { }
  addCart(prodId:number): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    //const body=JSON.stringify(cart);
 
    return this.http.post<Cart>(this.url+prodId,{headers:headers}) 
}
addProductToCart(id:number): Observable<number> {
  const headers = { 'content-type': 'application/json'}  
  return this.http.post<number>(this.url+'/'+id,{headers:headers}) 
}
    
    returnAllCarts():Observable<Cart[]>
    {
       return this.http.get<Cart[]>(this.url).pipe(catchError((err)=>
        {
          return throwError(err.message ||"Internal Server error Plz Try Again");
        }));
    }
}