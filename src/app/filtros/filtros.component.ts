import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { DataGettingService } from '../services/data-getting.service';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [
            MatFormFieldModule,
            MatSelectModule,
            MatOptionModule,
            MatInputModule,
            CommonModule,
            MatButtonModule,
            MatCardModule,
            MatGridListModule,
            MatIconModule,
          ],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css',
  providers: [DataGettingService]
})

export class FiltrosComponent {
  events: any[] = [];
  filteredEvents: any[] = [];
  provinces: string[] = [];
  categorys: any[] = [];
  selectedProvince: string ='';
  selecteFilt: string ='';
  filtered:any[] = [];
  constructor(public dataGettingService: DataGettingService){}

 // Define la propiedad eventTypeControl como un FormControl
  eventTypeControl: FormControl = new FormControl();

  ngOnInit() {
    this.dataGettingService.getEvents().subscribe(data => {
    this.events = data.Eventos;
    this.filteredEvents = this.events;
    this.extractProvincesAndCategorys();
    });
  }

  extractProvincesAndCategorys() {
    const provinceSet = new Set<string>(); // provinceSet almacenará un conjunto de nombres de provincias
    const categorySet = new Set<any>(); //categorySet almacenará un conjunto de tipos de eventos

    this.events.forEach(event => {
      provinceSet.add(event.provincia); //provinceSet.add(event.provincia) agrega la provincia del evento al conjunto provinceSet
      categorySet.add(event.restriccion); //eventTypeSet.add(event.actividad) agrega el tipo de actividad del evento al conjunto eventTypeSet
    });

    this.provinces = Array.from(provinceSet);// convierte el conjunto provinceSet en un array y asigna este array a this.provinces
    this.categorys = Array.from(categorySet);//convierte el conjunto categorySet en un array y asigna este array a this.category
  }

  onFiltersChanged(filters: any) {
    this.filteredEvents = this.events.filter(event => {
      return (!filters.province || event.provincia === filters.province) &&
             (!filters.category || event.category === filters.category);
    });
  }

  getProvince(){
    const provinciasDeseadas = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Misiones", "Santa Fe", "San Luis", "Salta", "La Pampa"];
    this.provinces = [...new Set(this.events.filter(event => provinciasDeseadas.includes(event.provincia)).map(event => event.provincia))];

    console.log("Mostrar la provincia", this.provinces)
  }

  filterEvents() {
    if (this.selecteFilt) {
      this.filtered = this.events.filter(event => event.provincia === this.selecteFilt);
    } else {
      this.filtered = this.events;
    }
  }

  getCategory(){
    
  }
}
   /*
          this.provinces = this.events.filter(event => provinciasDeseadas.includes(event.provincia)).map(event => event.provincia);
   */