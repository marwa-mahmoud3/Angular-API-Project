import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICategory } from '../Models/Icategory';
import { IProduct } from '../Models/Product';
import { ApiService } from '../Services/api.service';
import { CartService } from '../Services/cart.service';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';
import { SelfproductService } from '../Services/selfproduct.service';
import { WishlistService } from '../Services/wishlist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  categoryList:ICategory[]=[];
  errorMsg="";
  productList:IProduct[]=[];
  selectedID:any;
  product:IProduct;
  prodId:number;
  constructor(private apiservice:ApiService, private wishList:WishlistService,private cartService:CartService,private category:CategoryService,private activeRouter:ActivatedRoute,private productServices:ProductService,private router:Router,private selfService:SelfproductService) { }
  ngOnInit(): void {
    this.category.GetAllCategories().subscribe(
      categoryData=>
      {
        this.categoryList=categoryData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
    this.productServices.returnAllProducts().subscribe(
      serviceData=>
      {
        this.productList=serviceData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      })
      this.category.GetAllCategories().subscribe(
        categoryData=>
        {
          this.categoryList=categoryData;
        },
        errorResponse=>
        {
         this.errorMsg=errorResponse;
        }  
      )
      this.activeRouter.paramMap.subscribe((params:ParamMap)=>
    this.selectedID=params.get('id')
    );

    
  }
  products:IProduct;
  gotoDetails(product:IProduct)
  {
    let proID:number=product.ID;
    this.router.navigate(['/productDetails',proID]);
    this.productServices.getProductById(proID).subscribe(
      productData=>
      {
        this.products=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )}
  goTpProduct(cat:ICategory)
  {
    let CatID:number=cat.ID;
    this.router.navigate(['/products',CatID]);
    this.selfService.returnAllProductsByCategoryID(CatID).subscribe(
      productData=>
      {
        this.productList=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }  
    )
  }
  logout(){
    this.apiservice.logout();
  }
  isSelected(cat:ICategory)
  {
   return cat.ID=this.selectedID
  }
  cartList:Array<IProduct>=[]
  addToCart(product:IProduct)
  {
    let proID:number=product.ID;
      this.cartService.addProductToCart(proID).subscribe(
       (res)=>
       {
         alert(res);
         alert("Added Successfuly");
       },
  
       (errorResponse)=>
       {
        this.errorMsg=errorResponse; 
        alert("falied" +this.errorMsg);    
       })
    this.cartList.push(this.product);
      localStorage.setItem("ProductList", JSON.stringify(this.cartList));
      console.log(localStorage.getItem("ProductList"));
  }
  addTowhishList(product:IProduct)
  {
    let proID:number=product.ID;
      this.wishList.addProductToWishList(proID).subscribe(
       (res)=>
       {
         alert(res);
         alert("Added Successfuly");
       },
  
       (errorResponse)=>
       {
        this.errorMsg=errorResponse; 
        alert("falied" +this.errorMsg);    
       })
    this.cartList.push(this.product);
      localStorage.setItem("ProductList", JSON.stringify(this.cartList));
      console.log(localStorage.getItem("ProductList"));
  }
}