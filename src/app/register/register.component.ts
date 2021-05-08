import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { UserService } from '../Services/user.service';
import { Users } from '../Shared/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel=new Users('','','');
  constructor(private userservice:UserService,private apiservice:ApiService,private router: Router) { }
  
  ngOnInit(): void {
    this.reserform();
  }
  reserform(form? : NgForm){
    if(form !=null)
      form.reset();
    this.userModel= {
      name : '',
      password : '',
      confirmpassword :''
    }
  }
  public loginError:String;

  OnSubmit(form : NgForm){
    this.userservice.registerUser(this.userModel).subscribe((data:any)=>{
      if(data.Succeeded == true)
      this.reserform(form);
      this.router.navigate(["/dashboard"]);
    });
  }
}

