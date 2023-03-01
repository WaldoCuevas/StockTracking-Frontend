import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NuevoUsuario } from 'src/app/Models/Usuario/nuevo-usuario';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { TokenService } from 'src/app/Service/Usuario/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: NuevoUsuario = new NuevoUsuario();

  isLogged = false;

  constructor(private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {


    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }

  }

  guardarUsuario() {
    this.usuarioService.nuevo(this.usuario).subscribe(
      {
        next: (data) => {
          this.toastrService.success("Cuenta creada con exito!", "StockTracking", {timeOut:5000});
          this.goToListaUsuarios();

        }, error: (err) => {
          this.toastrService.error("Error al crear la cuenta, intente nuevamente", "StockTracking", {timeOut:5000});
        }
      });
  }

  goToListaUsuarios() {
    this.router.navigate(['/iniciar-sesion'])
  }

  onSubmit() {
    this.guardarUsuario();
  }

}
