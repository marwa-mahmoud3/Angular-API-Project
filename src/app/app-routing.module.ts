import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SelfproductComponent } from './selfproduct/selfproduct.component';
import { AuthGuard } from 'src/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"Register",component : RegisterComponent},
  {path:'products/:id' ,component:SelfproductComponent},
  {path:'Home' ,component:ProductComponent},
  {path:"",redirectTo:'/Home' ,pathMatch:'full'},
  {path:'login', component: LoginComponent ,canActivate:[AuthGuard] },
  {path:"dashboard", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



