import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DeclaracionesDeFeComponent } from './declaraciones-de-fe/declaraciones-de-fe.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { NoticiasDeIsraelComponent } from './noticias-de-israel/noticias-de-israel.component';
import { EventosComponent } from './eventos/eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MexicoOraComponent } from './mexico-ora/mexico-ora.component';
import { AvisoDePrivacidadComponent } from './aviso-de-privacidad/aviso-de-privacidad.component';

import { FormularioService }  from  './services/formulario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    DeclaracionesDeFeComponent,
    EstudiosComponent,
    NoticiasDeIsraelComponent,
    EventosComponent,
    NoticiasComponent,
    NosotrosComponent,
    MexicoOraComponent,
    AvisoDePrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [

    FormularioService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
