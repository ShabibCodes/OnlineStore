import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  item: Item;
  counter: number[]= [1, 2,3, 4,5 ,6 ,7 ,8 ,9, 10]
  @Input() product: Product


  constructor(private cartService: CartService){
    this.product={
      id:0,
      price:0,
      name: "",
      description: "",
      url: ""
    }

    this.item= {
      product: this.product,
      quantity: 1
    }
  }

   submitToCart(): void{
    console.log('cart', this.cartService.getCart())

    this.item= {
      product: this.product,
      quantity: this.item.quantity
    }
    const itemInCart: Item= ( this.cartService.getCart()).filter(item => item.product.id == this.product.id)[0];

    if(!itemInCart){ //Falsy (not in the cart)
      this.cartService.addToCart(this.item)
    }
    alert(`${this.product.name} ($${this.product.price})has been added to the cart.`)
  
}


updateQuantity(newQuantity: any):void{
  this.item.quantity= Number(newQuantity)
  
}
}

