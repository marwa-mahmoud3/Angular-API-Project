import { Component, OnInit } from '@angular/core';
import { ProductWishList } from '../Models/ProductWishList';
import { ApiService } from '../Services/api.service';
import { WishlistProductService } from '../Services/wishlist-product.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishListProductList:ProductWishList[];
  wishListt:ProductWishList;
  constructor(private apiservice:ApiService,private wishList:WishlistProductService) { }
  errorMsg="";
  ngOnInit(): void {
 this.productInWishList(this.wishListt);

  }
  logout(){
    this.apiservice.logout();
  }
  productInWishList(wishList:ProductWishList)
  {
    this.wishList.returnAllProductInSpecificWishList(1).subscribe(
      productData=>
      {
        this.wishListProductList=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }  
    )
  }
}