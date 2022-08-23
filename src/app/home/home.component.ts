import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="asi me bindeas bebe"
  modificado =false
  cambiarT(){
    this.title = "que cambias? la concha de tu madre!"
    this.modificado = true
  }
  constructor(
    private productosService:ProductosService
  ){
    this.productos = this.productosService.getAll()
  }

  ngOnInit(): void {
  }

}
