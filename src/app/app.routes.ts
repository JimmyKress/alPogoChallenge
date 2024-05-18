import { Routes } from '@angular/router';
//import { FiltrosComponent } from './filtros/filtros.component';
import { ListComponent } from './list/list.component';
import { FichaEventoComponent } from './ficha-evento/ficha-evento.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'evento/:id', component: FichaEventoComponent }
];
