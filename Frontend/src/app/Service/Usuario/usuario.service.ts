import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JWTDTO } from 'src/app/Models/Usuario/jwt-dto';
import { LoginUsuario } from 'src/app/Models/Usuario/login-usuario';
import { NuevoUsuario } from 'src/app/Models/Usuario/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  UrlAuth = 'http://localhost:8080/auth/';
  UrlUsuario = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.UrlAuth + 'nuevo'}`, nuevoUsuario);
  }

  login(loginUsuario: LoginUsuario): Observable<JWTDTO> {
    return this.httpClient.post<JWTDTO>(`${this.UrlAuth + 'login'}`, loginUsuario);
  }

  getUsuario(nombreUsuario: String | null): Observable<NuevoUsuario> {
    return this.httpClient.get<NuevoUsuario>(`${this.UrlUsuario + 'usuario'}/${nombreUsuario}`);
  }

  //Metodo para obtener todos los productos
  obtenerListaDeUsuarios(): Observable<NuevoUsuario[]> {
    return this.httpClient.get<NuevoUsuario[]>(`${this.UrlUsuario + 'usuarios'}`);
  }

}
