import { Component } from '@angular/core';
import {Item} from '../../models/item'
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/order';
import { isTemplateExpression, textChangeRangeIsUnchanged } from 'typescript';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


cart: Item[]=[]
total!: Number

order: Order
constructor(private cartService: CartService){
  this.order={
    name:"",
    address:"",
    cardNumber:0,
    total: this.total
  }
}


ngOnInit(){
  this.cart= this.cartService.getCart();
  console.log(this.cart.length,this.cart[0].product.name)
  this.total= this.cartService.getTotal();
}





submitPayment(){

  // set order model
  this.order= {
    name: this.order.name,
    address: this.order.address,
    cardNumber: this.order.cardNumber,
    total: this.total
  }

  /**
   * submit order to a service in order to
   * move data from one component to another
   * cart --> confirmation
   *  */ 
  this.cartService.setOrder(this.order);
}

clearCart(): void{
  this.cartService.clearCart();
}

}
