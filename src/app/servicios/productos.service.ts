import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom ,map, Observable } from 'rxjs';
import { Producto, ResponseProducto } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient)
   { }
   getAll():Observable<ResponseProducto>{
    return this.http.get<ResponseProducto>("https://pokeapi.co/api/v2/pokemon/?limit=8&offset=0")
   }
   getAllPromise():Promise<ResponseProducto>{
    return lastValueFrom(this.http.get<ResponseProducto>("https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0"))
   }
   getById(id:string):Observable<Producto>{
    return this.http.get<Producto>("https://pokeapi.co/api/v2/pokemon/"+id)
   }
}