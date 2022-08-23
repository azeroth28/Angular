import { Injectable } from '@angular/core';
import {HttpClient} from ;
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient)
   { }
   getAll(){
    return this.http.
   }
}
