import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../Models/Product';
import { SelfproductService } from '../Services/selfproduct.service';

@Component({
  selector: 'app-selfproduct',
  templateUrl: './selfproduct.component.html',
  styleUrls: ['./selfproduct.component.css']
})
export class SelfproductComponent implements OnInit {
  productList:IProduct[]=[];
  errorMsg="";
  constructor(private router:Router,private selfproduct:SelfproductService,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.selfproduct.returnAllProducts().subscribe(
      serviceData=>
      {
        this.productList=serviceData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      })
      let catID=this.activeRouter.snapshot.paramMap.get('id');
  }

}
