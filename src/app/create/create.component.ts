import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { IdGenerate } from '../update/shared/idgenerate';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit  {
  
 id:number=0
  productform:any;
  constructor(private fb : FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productservice: ProductDataService
    ){
    this.productform = this.fb.group({
    productname: ['',[Validators.required]],
     productimage:  ['',[Validators.required]],
     categories :  ['',[Validators.required]],
     date :  ['',[Validators.required]],
     price :  ['',[Validators.required]],
     comment :  ['',[Validators.required]],
    })

  }
  ngOnInit(): void {
       
  }
 
    addProduct(){
      const id= new IdGenerate();
      console.log(this.productform)
      const k ={id:'P'+id.idGenerate(),
        productname:this.productform.controls['productname'].value,
        productimage:this.productform.controls['productimage'].value,
        categories:this.productform.controls['categories'].value,
        date :this.productform.controls['date'].value,
        price:this.productform.controls['price'].value,
        comment:this.productform.controls['comment'].value,
      }
  
        this.productservice.addProduct(k)
        this.router.navigate(["/dashboard"])
  
}
}