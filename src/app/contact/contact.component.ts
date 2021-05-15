import { Component, OnInit } from '@angular/core';
import { ICategory } from '../Models/Icategory';
import { ApiService } from '../Services/api.service';
import { CategoryService } from '../Services/category.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  categoryList:ICategory[]=[];
  errorMsg="";
  selectedID:any;
  constructor(private apiservice:ApiService,private category:CategoryService) { }
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
  }
  isSelected(cat:ICategory)
  {
   return cat.ID=this.selectedID
  }
}
