import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/Models/Usuario/login-usuario';
import { UsuarioService } from 'src/app/Service/Usuario/usuario.service';
import { TokenService } from 'src/app/Service/Usuario/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {

  isLogged:Boolean;
  loginUsuario: LoginUsuario;

  nombreUsuario: string;
  password: string

  errMsj: string;

  roles: string[] = [];

  constructor(private router: Router,
    private tokenService: TokenService,
    private usuarioService: UsuarioService,
    private toastrService: ToastrService) { }


  ngOnInit() {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  //onLogin
  iniciarSesion() {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.usuarioService.login(this.loginUsuario).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastrService.success("Usuario logueado con exito", "StockTracking", { timeOut: 3000 })
        this.router.navigate(['/index']);
      }, error: err => {
        this.isLogged = false;
        this.toastrService.error("Error al iniciar Sesión", "StockTracking", { timeOut: 3000 })
      }
    });
  }


  irAlPerfil(id: any) {
    this.router.navigate(['perfil-usuario', id]);
  }



}
