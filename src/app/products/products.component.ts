import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public name: string = ''
  public price: any = 0
  public rating: any = 0 
  public freedelivery: string = ''
  public products : any = []

addcart(){
  this.products.push({
    name:this.name, price:this.price, rating:this.rating, freedelivery:this.freedelivery
  })
  this.name=''
}

deletefitem() {
  this.products.shift();
  console.log(this.products);
}

deletelitem() {
  this.products.pop();
  console.log(this.products);
}

preverse() {
  this.products.reverse();
  console.log(this.products);
}

  tcitems() {
    var result = this.products.length
    console.log("Total Cart Items : ", result);
  }
}
