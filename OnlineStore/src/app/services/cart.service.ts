import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[]= []
  total: number=0;
  emit: any;


  constructor() { }


addToCart(item: Item): void{
  this.cart.push(item);
}

getCart(): Item[]{
  return this.cart;
}

getTotal(): Number{
  let total= 0
  this.cart.forEach((item) => total+= item.product.price)
  return total;
}


getNumItems():Number{
  return this.cart.length
}

}
