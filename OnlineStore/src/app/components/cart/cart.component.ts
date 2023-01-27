import { Component } from '@angular/core';
import {Item} from '../../models/item'
import { CartService } from 'src/app/services/cart/cart.service';
import { Order } from 'src/app/models/order';
import { FormBuilder } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


 trashIcon= faTrash; 
counter: number[]= [1, 2,3, 4,5 ,6 ,7 ,8 ,9, 10]
cart: Item[] = [];
total: Number= this.cartService.getTotal();
order: Order = new Order;



constructor(private cartService: CartService){}


 ngOnInit(){
  this.cart= this.cartService.getCart()
}

submitPayment(): void{
  // set order model
  this.order= {
    name: this.order.name,
    address: this.order.address,
    cardNumber: this.order.cardNumber,
    total: this.total
  }

  // console.log('x',this.order);


  /**
   * submit order to a service in order to
   * move data from one component to another
   * cart --> confirmation
   *  */ 
  this.cartService.setOrder(this.order);
  this.clearCart()
}



clearCart(): void{
  this.cartService.clearCart();
}

updateQuantity(item :Item){
  this.cartService.setCart(this.cart) //update the cart
  this.total= this.cartService.getTotal() //get updated price
}

removeFromcart(item: Item): void{
  this.cartService.removeFromCart(item)
  this.cart= this.cartService.getCart()
  this.total= this.cartService.getTotal()
}

}
