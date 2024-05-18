import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataGettingService } from '../services/data-getting.service';
import { Event } from '../list/event/event.entities';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-ficha-evento',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ficha-evento.component.html',
  styleUrl: './ficha-evento.component.css',
  providers: []
})

export class FichaEventoComponent {
  evento: Event | undefined;
  
  constructor(private route: ActivatedRoute, private dataGettingService: DataGettingService) {
    
  }

  ngOnInit(): void {
    // Obtener un evento por ID
    this.obtenerEvento();
  }

  obtenerEvento() {
    this.route.paramMap.subscribe(async (params) => {
      const eventId = params.get('id');
      if (eventId) {
        this.evento = await this.dataGettingService.getEventById(eventId);
      }
    });
  }
}
