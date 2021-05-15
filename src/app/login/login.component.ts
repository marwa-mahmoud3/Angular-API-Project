import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { LoginUsers } from '../Shared/Login';
  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    loginuser=new LoginUsers('','','');
    isLoginError : boolean =false;
    constructor(private apiService:ApiService,private router: Router) { }

    ngOnInit() {}
    onSubmit(username,password){  
      this.apiService.userAuthintication(username,password).subscribe((data:any)=>{
        localStorage.setItem('userToken',data.access_token);
        
        this.router.navigate(["/dashboard"]);
      },
      (err:HttpErrorResponse)=>{
        this.isLoginError =true;
      }
      );    
    }
  }