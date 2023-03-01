import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import
import { interceptorProvider } from './Utils/Interceptor/Interceptor.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavBarComponent } from './Component/NavBar/nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Import para Productos
import { ListaProductoComponent } from './Component/Producto/lista-producto/lista-producto.component';
import { ModificarProductoComponent } from './Component/Producto/modificar-producto/modificar-producto.component';
import { RegistrarProductoComponent } from './Component/Producto/registrar-producto/registrar-producto.component';
import { DetallesProductoComponent } from './Component/Producto/detalles-producto/detalles-producto.component';

//Import para Usuarios
import { ListaUsuariosComponent } from './Component/Usuario/lista-usuarios/lista-usuarios.component';
import { IniciarSesionComponent } from './Component/Usuario/iniciar-sesion/iniciar-sesion/iniciar-sesion.component';
import { PerfilUsuarioComponent } from './Component/Usuario/perfil-usuario/perfil-usuario.component';
import { RegistrarUsuarioComponent } from './Component/Usuario/registrar-usuario/registrar-usuario.component';
import { IndexComponent } from './Component/Index/index/index.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    RegistrarUsuarioComponent,
    ListaProductoComponent,
    ModificarProductoComponent,
    RegistrarProductoComponent,
    IniciarSesionComponent,
    DetallesProductoComponent,
    PerfilUsuarioComponent,
    NavBarComponent,
    IndexComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
