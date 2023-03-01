import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/Service/Usuario/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogged = false;
  isAdmin = false;
  roles: string[];

  nombreUsuario: string | null;

  constructor(private tokenService: TokenService, 
    private router:Router,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  public isLogin(): boolean {
    this.roles = this.tokenService.getAuthorities();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
        }
      })
      return true;
    }
    return false;
  }

  public getUserName(nombreUsuario: string | null): void {
    this.nombreUsuario = this.tokenService.getUserName();
    this.router.navigate(['perfil-usuario', this.nombreUsuario]);
  }

  cerrarSesion(): void {
    this.tokenService.logOut();
    this.isLogged = false;
    this.isAdmin = false;
    this.toastrService.success("Cuenta cerrada","StockTracking", { timeOut:3000 })
    this.router.navigate(['/index']);
  }

}
