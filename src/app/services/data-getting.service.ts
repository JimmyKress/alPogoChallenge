import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Event } from '../list/event/event.entities';

@Injectable({
  providedIn: 'root'
})
export class DataGettingService {
  private eventsJson = 'assets/eventos.json';
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
    return this.http.get<any>(this.eventsJson);
  }

  // Método para obtener un evento por su ID
  async getEventById(id: any): Promise<Event | undefined> {
    return new Promise((resolve, reject) => {
      let eventObjReturned: Event | undefined;
      this.getEvents().subscribe(
        (data: any) => {
          let events: Event[] = data.Eventos;
          eventObjReturned = events.find((event: any) => event.id_evento === id)
          resolve(eventObjReturned)
        },
        (error: any) => {
          reject(error)
        }
      );
    });
  }
  
}
