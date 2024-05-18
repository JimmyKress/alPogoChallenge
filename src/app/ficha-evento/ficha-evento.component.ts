import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-ficha-evento',
  standalone: true,
  imports: [],
  templateUrl: './ficha-evento.component.html',
  styleUrl: './ficha-evento.component.css'
})

export class FichaEventoComponent {
  eventsId: any[] = [];
  eventId: any;
  constructor(private route: ActivatedRoute, private servicesComponent: ServicesComponent) { }

  ngOnInit(): void {
    // Obtener un evento por ID
    this.route.paramMap.subscribe(params => {
      const eventId = params.get('id');
      if (eventId) {
        this.servicesComponent.getEventById(eventId).subscribe(event => {
          this.eventId = event; // Puedes asignar el evento a una propiedad
          this.eventsId = [event]; // O a un array si esperas trabajar con una lista
        });
      }
    });
  }
}
