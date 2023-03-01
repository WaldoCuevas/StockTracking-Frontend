import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NuevoUsuario } from 'src/app/Models/Usuario/nuevo-usuario';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { TokenService } from 'src/app/Service/Usuario/token.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: NuevoUsuario = new NuevoUsuario();
  nombreUsuario: string | null;

  constructor(private router: ActivatedRoute,
    private usuarioService: UsuarioService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    this.nombreUsuario = this.tokenService.getUserName();
    
    this.usuarioService.getUsuario(this.nombreUsuario).subscribe(
      {
        next: (dato) => {
          this.usuario = dato;
        }, error: (err) => {
          alert(err);
        },
      });
  }


}
