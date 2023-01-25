import { Component } from '@angular/core';
import {Item} from '../../models/item'
import { CartService } from 'src/app/services/cart/cart.service';
import { Order } from 'src/app/models/order';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


cart: Item[]= this.cartService.getCart()
total: Number= this.cartService.getTotal();
  order: Order = new Order;



constructor(private cartService: CartService){

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

}
