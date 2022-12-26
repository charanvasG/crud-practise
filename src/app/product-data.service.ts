import { Injectable } from '@angular/core';
import { Product } from './product';
import { IdGenerate } from './update/shared/idgenerate';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  id:any

    private productlist: Product[] =[{
      id : '1',
      productname :"Mango" ,
      productimage : "https://images.hindustantimes.com/img/2021/06/25/1600x900/9a156550-c367-11eb-9d53-2d5cae187b44_1624624374058.jpg",
      categories : "Fruits",
      date : "12/26/2022",
      price : 200,
      comment :"Organic"
    },
    {
      id : '2',
      productname :"BottleGuard",
      productimage : "https://m.media-amazon.com/images/I/51mSuAwCtkL._SX679_.jpg",
      categories : "Vegetables",
      date : "10/12/2022",
      price : 400,
      comment :"Fresh"
    },
    {
      id : '3',
      productname :"OnePlus Nord" ,
      productimage : "https://www.notebookcheck.net/typo3temp/_processed_/c/d/csm_4_zu_3_OnePlus_Nord_2_5G_5cd4169a73.jpg",
      categories : "Electronics",
      date : "10/16/2022",
      price : 38000,
      comment :"Android"
    },
  ]

  constructor() { }
  getProducts(){
    return this.productlist
}
getProductsByID(id: string){
    return this.productlist.find(x => x.id == id);
}
editproduct(product: Product) {
  const productIndex = this.productlist.findIndex(x => x.id == product.id);
  if (productIndex != null && productIndex != undefined) {
      this.productlist[productIndex] = product;
  }
}
removeProduct(id: string) {
  this.productlist = this.productlist.filter(x => x.id != id);
}
addProduct(product: Product) {
  // product.id = new Date().getTime();
  this.productlist.push(product);
}

}
