import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private cartService: CartService ){}


numberofItem(): Number{
  return this.cartService.getNumItems()
}

}
