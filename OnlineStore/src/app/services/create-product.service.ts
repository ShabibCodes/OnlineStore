import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http'; //service so include it in the constructor
import client from '../database';
import dataJSON from '../../assets/data.json' // CHECK !


@Injectable({
  providedIn: 'root'
})
export class CreateProductService {

  constructor(private http: HttpClient) { }


//   async getDB():  Promise<Product[]>{

//     try {
//       const db= await client.connect()
//       const query= 'select * from products';
//       const {rows}= await db.query(query);

//       // Close connection
//       db.release()
//       console.log(rows)
//       return rows;

//   }catch(err){
//           throw err;
//       }
// }

getProducts():  Observable<Product[]>{
  
  const result=this.http.get<Product[]>('./assets/data.json');
  // console.log(result);
  return result;
}



}
