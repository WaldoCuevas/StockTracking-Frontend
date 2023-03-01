import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './Service/Usuario/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogged = false;
  isAdmin = false;
  roles: string[];

  nombreUsuario: string | null;

  constructor(private tokenService: TokenService, private router:Router) { }

  ngOnInit(): void {

    this.roles = this.tokenService.getAuthorities();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
          
        }
      })

    }

  }

}