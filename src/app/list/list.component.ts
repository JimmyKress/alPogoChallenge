import { Component, HostListener } from '@angular/core';
import { OnInit, PLATFORM_ID  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FichaEventoComponent } from '../ficha-evento/ficha-evento.component';
import { EventComponent } from './event/event.component';
import { Event } from './event/event.entities';
import { DataGettingService } from '../services/data-getting.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: 
  [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    CommonModule,
    FlexLayoutServerModule,
    FlexLayoutModule,
    EventComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [DataGettingService, DatePipe]
})

export class ListComponent implements OnInit {
  events: Event[] = [];
  visibleEvents: Event[] = [];
  rowsToShow: number = 3;
  showLoadMoreButton: boolean = false;
  mostrarMensajeBienvenida = true;
  constructor(
    public dataGettingService: DataGettingService,
    public breakpointObserver: BreakpointObserver,
    private datePipe: DatePipe,
    private router: Router,
  ) {
    
  }
  
  ngOnInit(): void {
    this.dataGettingService.getEvents().subscribe(data => {
      let elements: any[] = data.Eventos;
      elements.forEach((element: any) => {

        this.events.push(new Event(
          element.id_evento,
          element.nombre,
          element.descripcion,
          element.descripcion_corta,
          element.estado,
          element.visible,
          element.gratuito,
          element.actividad,
          element.id_lugar,
          element.lugar,
          element.id_provincia,
          element.provincia,
          element.inicio_funcion,
          element.fin_funcion,
          element.restriccion,
          element.imagen_logo,
          element.menor_precio
        ))
      })
      
      this.loadMore();
    });

    const mensajeMostrado = sessionStorage.getItem('mensajeBienvenida');
    if (mensajeMostrado) {
      this.mostrarMensajeBienvenida = false; // No mostrar el mensaje
    }
    
  }
    

  gridCols(): number {
    if (this.breakpointObserver.isMatched('(min-width: 1100px)')) {
      // Si es una pantalla grande (≥ 1100px), devuelve 4 columnas
      return 4;
    } else if (this.breakpointObserver.isMatched('(min-width: 800px)')) {
      // Si es una pantalla mediana (≥ 860px), devuelve 2 columnas
      return 2;
    } else  {
      // Para cualquier otro tamaño de pantalla, devuelve 1 columna
      return 1;
    }
  }

  loadMore(): void {
    const currentLength = this.visibleEvents.length;
    const additionalEvents = this.events.slice(currentLength, currentLength + this.rowsToShow * this.gridCols());
    this.visibleEvents = [...this.visibleEvents, ...additionalEvents];
    //console.log(this.visibleEvents)
    this.showLoadMoreButton = this.visibleEvents.length < this.events.length;
  }

  cerrarMensaje() {
    this.mostrarMensajeBienvenida = false;
    sessionStorage.setItem('mensajeBienvenida', 'true'); // Marcar que el mensaje fue mostrado en la sesión
  }

}

