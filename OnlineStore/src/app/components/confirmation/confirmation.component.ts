import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

order!: Order;

  constructor(private cartService: CartService){}

ngOnInit(){
  this.order= this.cartService.getOrder();

}


}
