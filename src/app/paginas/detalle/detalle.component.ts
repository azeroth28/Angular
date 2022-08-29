import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto!: Producto
  constructor(
    private productosService:ProductosService,
    private activateRoute:ActivatedRoute 
  ) {
    const id = this.activateRoute.snapshot.paramMap.get("id")
    console.log("id",id)
    if(id){
    this.productosService.getById(id)
    .subscribe((data:Producto)=>{
      this.producto=data

    })
    }
   }


  ngOnInit(): void {
  }

}
