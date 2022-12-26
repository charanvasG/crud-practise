import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  productform: FormGroup;
  id: string='0';
  data:any
 
  constructor(
    public fb:FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private productservice:ProductDataService,

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
   this.id = this.route.snapshot.params['id']
   console.log(this.id,"id")
   let data =this.productservice.getProductsByID(this.id);
   console.log(data,"data");
   if (data){
    this.productform.patchValue({
      id : data.id,
      productname: data.productname,
      productimage: data.productimage,
      categories : data.categories,
      date : data.date,
      price : data.price,
      comment : data.comment,
    });
   }
  
    }
    updateProduct(){
      const k={id:this.id,
        productname:this.productform.controls['productname'].value,
        productimage:this.productform.controls['productimage'].value,
        categories:this.productform.controls['categories'].value,
        date :this.productform.controls['date'].value,
        price:this.productform.controls['price'].value,
        comment:this.productform.controls['comment'].value,
      }

      this.productservice.editproduct(k)
      this.router.navigate(["/dashboard"])
    }
    
  }
 

