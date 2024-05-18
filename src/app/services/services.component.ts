//Este archivo se encargara de cargar los datos de eventos.json
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'; //se encargara de hacer las peticiones
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})

export class ServicesComponent {
  private eventJson = 'assets/eventos.json'; //obtengo los datos
  private httpOptions: any;

  constructor(
    private http: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Max-Age': '86400',
        'x-cache': 'true'
      }),
      responseType: 'json'
    }
  }

  getEvents(): Observable<any> {
    return this.http.get<any>(this.eventJson);
  }

  // Método para obtener un evento por su ID
  getEventById(id: any): Observable<any> {
    return this.getEvents().pipe(
      map(events => events.find((event: any) => event.id_evento === id))
    );
  }
  
}
