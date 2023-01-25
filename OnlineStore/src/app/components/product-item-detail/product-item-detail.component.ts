import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ActivatedRoute} from '@angular/router'
import {CreateProductService} from '../../services/create-product/create-product.service'
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent {

  @Input() product: Product
  id: string | null="";
  counter: number[]= [1, 2,3, 4,5 ,6 ,7 ,8 ,9, 10]
  item: Item


constructor(private cartService: CartService ,private router: ActivatedRoute, private createService:CreateProductService){
  this.product={
    id: 0,
    name: "",
    desc:  "",
    url: "",  
    price: 1
}

this.item= {
  product: this.product,
  quantity: 1
}
}





ngOnInit(){

  this.id = this.router.snapshot.paramMap.get('id');
  
  this.createService.getProducts().subscribe(res=> {
    this.product= res.filter((p)=>
      Number(this.id) == p.id)[0]
    // console.log(this.product)
})
}

submitToCart(): void{

  if(this.item.quantity !== 0){
  this.item= {
    product: this.product,
    quantity: this.item.quantity
  }
  this.cartService.addToCart(this.item)
  // console.log('X',this.item)
  alert("Product has been added to the cart.")
}
}

}


