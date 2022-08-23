import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: any= []
  productosAsync:any=[]
  productosObs:any=[]
  loading=true
  constructor(
    private productosService:ProductosService
  ){
    this.productosService.getAll()
     .subscribe({
       next:(data:any)=>{
         console.log(data)
         this.productos=data.results
        this.loading=false
       },
       error:error=>{
         console.log(error)
       }
     })
  }

  async init(){
    try{
      const response:any = await this.productosService.getAllPromise()
      this.productosAsync = response["results"]
    }catch(e){}
  }

  ngOnInit(): void {
  }

}
