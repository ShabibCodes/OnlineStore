import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import {CreateProductService} from '../../services/create-product/create-product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[]= []

  
  constructor(private createService:CreateProductService){}

  ngOnInit(): void {
    // Subscribe to the observable
    this.createService.getProducts().subscribe(res=> {
      this.products= res
      console.log(res)
    })
  }
}
