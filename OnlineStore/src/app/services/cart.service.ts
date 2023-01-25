import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[]= []
  total: number=0;
  order!: Order

  constructor() { }


addToCart(item: Item): void{
  this.cart.push(item);
}

getCart(): Item[]{
  return this.cart;
}

clearCart(): void{
  this.cart= [];
}

getTotal(): Number{
  let total= 0
  this.cart.forEach((item) => total+= (item.product.price* item.quantity))
  return total;
}


getNumItems():Number{
  return this.cart.length
}

setOrder(order: Order){
  this.order= order
}

getOrder(): Order{
  return this.order
}
}
