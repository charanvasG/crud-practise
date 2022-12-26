import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Product } from '../product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
productlist: Product[] =[];

  constructor(private productservice: ProductDataService, private _router: Router,) {}

  ngOnInit(): void {
   
    this.productlist = this.productservice.getProducts();
}

removeProduct(id:string){
 this.productservice.removeProduct(id);
 this.productlist = this.productservice.getProducts();
  alert("Product Deleted Successfully")
 }
//  editpara(x: { id: number}){
// this._router.navigate(['/update',x.id])
//  }
update(id:any){
  this._router.navigate(['/update',id])

}
}
