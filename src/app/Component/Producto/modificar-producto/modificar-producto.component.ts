import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../../Service/Producto/producto.service';
import { Producto, Categoria, Unidad } from '../../../Models/Producto/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  id:number;
  producto:Producto = new Producto();

  unidades: Unidad[];
  categorias: Categoria[];

  constructor(private servicio: ProductoService, 
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.obtenerCategorias();
    this.obtenerUnidades();

    this.id = this.route.snapshot.params['id'];
    this.servicio.obtenerProductoPorId(this.id).subscribe({
      next: (dato) => {
        this.producto = dato;
      },
      error: (err) => {
        this.router.navigate(['/not-found']);
      },
      
    });
  }

  irALaListaDeProducto(){
    this.router.navigate(['/lista-productos']);
  }

  onSubmit(){
    this.servicio.actualizarProducto(this.id,this.producto).subscribe(dato=>{
      this.toastrService.success("Producto modificado con exito", "StockTracking", {timeOut:5000});
      this.irALaListaDeProducto();
    })
  }

  obtenerUnidades() {
    this.servicio.obtenerUnidades().subscribe(dato => {
      this.unidades = dato;
    })
  }

  obtenerCategorias() {
    this.servicio.obtenerCategorias().subscribe(dato => {
      this.categorias = dato;
    })
  }

}
