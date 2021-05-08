import { Injectable } from '@angular/core';
import {CategoriesDetails } from 'src/app/API/Category_Details';
import { ICategory} from 'src/app/Models/Icategory';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  url='http://localhost:54827/api/Categories';
  fakeUrl=CategoriesDetails.GetAll;

  GetAllCategories():Observable<ICategory[]>
  {
    return this.http.get<ICategory[]>(this.url).pipe(catchError((err)=>
    {
      return throwError(err.message ||"Internal Server error contact site adminstarator");
    }));
  }
}
