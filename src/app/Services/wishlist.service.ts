import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';import { WishList } from '../Models/WishList';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  url='http://localhost:54827/api/Whichlists';
  constructor(private http:HttpClient) { }
  addWishList(prodId:number): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    //const body=JSON.stringify(cart);
 
    return this.http.post<WishList>(this.url+prodId,{headers:headers}) 
}
addProductToWishList(id:number): Observable<number> {
  const headers = { 'content-type': 'application/json'}  
  return this.http.post<number>(this.url+'/'+id,{headers:headers}) 
}
    
    returnAllWishLists():Observable<WishList[]>
    {
       return this.http.get<WishList[]>(this.url).pipe(catchError((err)=>
        {
          return throwError(err.message ||"Internal Server error Plz Try Again");
        }));
    }
  }