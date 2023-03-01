import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import de Usuario
import { ListaUsuariosComponent } from './Component/Usuario/lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './Component/Usuario/registrar-usuario/registrar-usuario.component';
import { IniciarSesionComponent } from './Component/Usuario/iniciar-sesion/iniciar-sesion/iniciar-sesion.component';

//Import de Producto
import { ListaProductoComponent } from './Component/Producto/lista-producto/lista-producto.component';
import { ModificarProductoComponent } from './Component/Producto/modificar-producto/modificar-producto.component';
import { RegistrarProductoComponent } from './Component/Producto/registrar-producto/registrar-producto.component';
import { DetallesProductoComponent } from './Component/Producto/detalles-producto/detalles-producto.component';
import { PerfilUsuarioComponent } from './Component/Usuario/perfil-usuario/perfil-usuario.component';
import { UserGuardGuard } from './Utils/Guard/user-guard.guard';
import { IndexComponent } from './Component/Index/index/index.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [

  { path: 'index', pathMatch: "full", component: IndexComponent },
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'not-found', component: NotFoundComponent },

  //Rutas para usuarios
  { path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [UserGuardGuard], data: { expectedRol: ['admin'] } },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'perfil-usuario/:string', component: PerfilUsuarioComponent, canActivate: [UserGuardGuard], data: { expectedRol: ['admin', 'user'] } },

  //rutas para productos
  { path: 'registrar-producto', component: RegistrarProductoComponent, canActivate: [UserGuardGuard], data: { expectedRol: ['admin'] } },
  { path: 'lista-productos', component: ListaProductoComponent, canActivate: [UserGuardGuard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'actualizar-producto/:id', component: ModificarProductoComponent, canActivate: [UserGuardGuard], data: { expectedRol: ['admin'] } },
  { path: 'detalles-producto/:id', component: DetallesProductoComponent, canActivate: [UserGuardGuard], data: { expectedRol: ['admin', 'user'] } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
