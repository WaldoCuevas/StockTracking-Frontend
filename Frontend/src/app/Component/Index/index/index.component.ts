import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/Service/Usuario/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLogged = true;
  isAdmin = false;
  roles: string[];

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {

  this.roles = this.tokenService.getAuthorities();

    if (this.tokenService.getToken()) {
      this.isLogged = true,
        this.roles.forEach(rol => {
          if (rol === 'ROLE_ADMIN') {
            this.isAdmin = true;
          }
        })

    }


  }

}
