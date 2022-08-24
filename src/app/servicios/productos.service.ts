import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http:HttpClient)
   { }
   getAll(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0")
   }
   getAllPromise(){
    return lastValueFrom(this.http.get("https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0"))
   }
   getById(id:string){
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id)
   }
}

// // export function getPokemonById(id){
//   https://pokeapi.co/api/v2/pokemon/?limit=16&offset=0
//   return fetch("https://pokeapi.co/api/v2/pokemon/"+id)
//   .then(res=>res.json())
// }