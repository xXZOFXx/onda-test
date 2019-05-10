import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DeclaracionesDeFeComponent } from './declaraciones-de-fe/declaraciones-de-fe.component';
import { NoticiasDeIsraelComponent } from './noticias-de-israel/noticias-de-israel.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { EventosComponent } from './eventos/eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MexicoOraComponent } from './mexico-ora/mexico-ora.component';
import { AvisoDePrivacidadComponent } from './aviso-de-privacidad/aviso-de-privacidad.component';






const routes: Routes = [
{path:'nosotros', component:NosotrosComponent },
{path:'declaraciones-de-fe', component:DeclaracionesDeFeComponent },
{path:'noticias-de-israel', component:NoticiasDeIsraelComponent },
{path:'', component:HomeComponent },
{path:'registro', component:RegistroComponent },
{path:'aviso-de-privacidad', component:AvisoDePrivacidadComponent },
{path:'login', component:LoginComponent },
{path:'mexico-ora', component:MexicoOraComponent },
{path:'noticias', component:NoticiasComponent },
{path:'nosotros', component:NosotrosComponent },
{path:'header', component:HeaderComponent },
{path:'eventos', component:EventosComponent },
{path:'estudios', component:EstudiosComponent },
{path: '', redirectTo: '/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
