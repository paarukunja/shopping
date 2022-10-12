import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //view all product api
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
  }
  //view product api
  viewProduct(productId:any){
return this.http.get('http://localhost:3000/products/'+productId)
  }

//add new product api
addProduct(productBody:any){
  return this.http.post('http://localhost:3000/products/',productBody)

}
//update product api
updateProduct(productId:any,productBody:any){
return this.http.put('http://localhost:3000/products/'+productId,productBody)
}
//delete product api
deleteProduct(productId:any){
  return this.http.delete('http://localhost:3000/products/'+productId)

}


}
