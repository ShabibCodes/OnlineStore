import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart/cart.service';
import { faFingerprint} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

order: Order;
fingerPrint= faFingerprint;

  constructor(private cartService: CartService){
    this.order= {
      name:"",
      address:"",
      cardNumber:0,
      total:0
    }
  }

ngOnInit(){
  this.order= this.cartService.getOrder();
  console.log('cinfrim',this.order);

}




}
