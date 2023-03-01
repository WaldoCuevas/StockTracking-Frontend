import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductoService } from '../../../Service/Producto/producto.service';
import { Producto, Unidad, Categoria } from '../../../Models/Producto/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto: Producto = new Producto();

  unidades: Unidad[];
  categorias: Categoria[];

  constructor(private servicio: ProductoService,
    private router: Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.obtenerUnidades();
    this.obtenerCategorias();
  }

  obtenerUnidades() {
    this.servicio.obtenerUnidades().subscribe(dato => {
      this.unidades = dato;
      console.log(this.unidades);
    })
  }

  obtenerCategorias() {
    this.servicio.obtenerCategorias().subscribe(dato => {
      this.categorias = dato;
    })
  }


  guardarProducto() {
    this.servicio.registrarProducto(this.producto).subscribe(dato => {
      this.toastrService.success("Producto guardado con exito!", "StockTracking", {timeOut:5000});
      this.irALaListaDeProductos();
    });
  }

  irALaListaDeProductos() {
    this.router.navigate(['/lista-productos']);
  }

  onSubmit() {
    this.guardarProducto();
  }

}
