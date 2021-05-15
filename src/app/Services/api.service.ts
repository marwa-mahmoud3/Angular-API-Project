import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonResponse } from '../Shared/common-response';
import { LoginUsers } from '../Shared/Login';
 @Injectable({
     providedIn: 'root'
  })
  export class ApiService {
  private endPoint: string = "http://localhost:54827/login";
  loginStatus = new BehaviorSubject<boolean>(this.hasToken());
  
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  userAuthintication(username,password)
  {
    var data = "username="+username+"&password="+password+"&grant_type=password";
    var reqheader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.http.post(this.endPoint,data,{headers :reqheader });
  }
  logout() {
    this.loginStatus.next(false);
    this.cookieService.deleteAll();
    this.router.navigate(['/Home']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }

  private hasToken(): boolean {
    return this.cookieService.check('currentUser');
  }
}
    
    