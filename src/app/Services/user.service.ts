import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Shared/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url='http://localhost:54827/api/UserModels';
  
  ngOnInit() {          
  }
  registerUser(user : Users)
  {
    return this.http.post(this.url,user);
  }
  
}
