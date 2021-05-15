import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/Product';
import { ProductCart } from '../Models/ProductCart';
import { ApiService } from '../Services/api.service';
import { CartProductService } from '../Services/cart-product.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartProductList:ProductCart[];
  cart:ProductCart;
  constructor(private apiservice:ApiService, private cartService:CartService,private cartproductService:CartProductService) { }
  errorMsg="";
  ngOnInit(): void {
    
    this.productInCart(this.cart);
    // console.log(JSON.parse(localStorage.getItem("ProductList")||'{}'));
    // this.cartList=JSON.parse(localStorage.getItem("ProductList"));
    // console.log(this.cartList);
    // this.cartService.returnAllCarts().subscribe(
    //   (res)=>
    //   {
    //     alert(res);
    //     alert("Added Successfuly");
    //   },
    //   (errorResponse)=>
    //   {
    //    this.errorMsg=errorResponse; 
    //    alert("falied" +this.errorMsg);    
    //   })
    
  }
  logout(){
    this.apiservice.logout();
  }
  productInCart(cartList:ProductCart)
  {
    // let CatID=cartList.Cart.ID;
    // console.log(CatID);
    this.cartproductService.returnAllProductInSpecificCart(1).subscribe(
      productData=>
      {
        this.cartProductList=productData;
        console.log("asasdad");
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }  
    )
  }
}