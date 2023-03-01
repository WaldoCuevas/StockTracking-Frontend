import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/Models/Usuario/nuevo-usuario';
import { TokenService } from 'src/app/Service/Usuario/token.service';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: NuevoUsuario[];
  isAdmin = false;

  constructor(private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isAdmin = true;
      this.getUsers();
    }

  }

  private getUsers() {
    this.usuarioService.obtenerListaDeUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      }, error: (err) => {
        this.router.navigate(['/not-found']);
      },
    });
  }

}
