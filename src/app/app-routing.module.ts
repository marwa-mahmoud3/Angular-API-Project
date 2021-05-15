import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { SelfproductComponent } from './selfproduct/selfproduct.component';
import { AuthGuard } from 'src/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {path:"Register",component : RegisterComponent},
  {path:'Home' ,component:ProductComponent},
  {path:"",redirectTo:'/Home' ,pathMatch:'full'},
  {path:'login', component: LoginComponent ,canActivate:[AuthGuard] },
  {path:"dashboard", component: ProfileComponent},
  {path:"Contact Us" , component : ContactComponent},
  {path:"Register",component : RegisterComponent},
  {path:'Home' ,component:ProductComponent},
  {path:"",redirectTo:'/Home' ,pathMatch:'full'},
  {path:'login', component: LoginComponent ,canActivate:[AuthGuard] },
  {path:'products/:id',component:SelfproductComponent},
  // {path:'productDetails:/id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'wishList',component:WishListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



