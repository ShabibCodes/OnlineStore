import { Component } from '@angular/core';
import {Item} from '../../models/item'
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

cart: Item[]=[]
total!: Number

constructor(private cartService: CartService){}


ngOnInit(){
  this.cart= this.cartService.getCart();
  this.total= this.cartService.getTotal();
}



}
