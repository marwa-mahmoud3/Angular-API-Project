import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICategory } from '../Models/Icategory';
import { IProduct } from '../Models/Product';
import { ApiService } from '../Services/api.service';
import { CategoryService } from '../Services/category.service';
import { ProductService } from '../Services/product.service';
import { SelfproductService } from '../Services/selfproduct.service';

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
  constructor( private apiservice:ApiService,private category:CategoryService,private activeRouter:ActivatedRoute,private productServices:ProductService,private router:Router,private selfService:SelfproductService) { }
  logout(){
    this.apiservice.logout();
  }
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
  isSelected(cat:ICategory)
  {
   return cat.ID=this.selectedID
  }

}
