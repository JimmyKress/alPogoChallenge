import { Routes } from '@angular/router';
//import { FiltrosComponent } from './filtros/filtros.component';
import { ListComponent } from './list/list.component';
import { FichaEventoComponent } from './ficha-evento/ficha-evento.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'evento/:id', component: FichaEventoComponent },
];
