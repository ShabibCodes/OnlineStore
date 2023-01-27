import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { Order } from '../../models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Item[]= []
  total: number=0;
  order: Order

  constructor() { 
    this.order= {
      name:"",
      address:"",
      cardNumber:0,
      total:0
    }
  }


addToCart(item: Item): void{
  this.cart.push(item);
}

removeFromCart(item: Item): void{
  this.cart= this.cart.filter(i => i.product.id != item.product.id); //new cart
}

 getCart(): Item[]{
  return this.cart;
}

setCart(cart: Item[]): void{
  this.cart= cart
}

clearCart(): void{
  this.cart= [];
}

getTotal(): Number{
  let total= 0
  this.cart.forEach((item) => total+= (item.product.price* Number(item.quantity)))
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

updateCart(item: Item): void {
  // console.log('XXZ',this.cart)
  const oldQuantity=this.cart.filter(i =>i.product.id == item.product.id)[0];
  // console.log('XX',oldQuantity)
  this.cart= this.cart.filter(i => i.product.id != item.product.id); //new cart

  // console.log('X', item.quantity, "ZZ", oldQuantity)
  item.quantity= Number(item.quantity)+ Number(oldQuantity); //new total
  this.cart.push(item);
  console.log(item)
}
}
