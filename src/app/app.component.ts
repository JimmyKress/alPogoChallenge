import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//importo los componentes
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import { FichaEventoComponent } from './ficha-evento/ficha-evento.component';
import { EventComponent } from './list/event/event.component';
import { routes } from './app.routes';
//
import { HttpClientModule } from '@angular/common/http';//para hacer las peticiones
import { CommonModule } from '@angular/common';
//Importo todos los paquetes necesarios para el funcionamiento de angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent,
    CarouselComponent,
    ListComponent,
    HttpClientModule,
    CommonModule, 
    MatButtonModule, 
    MatCardModule, 
    MatGridListModule, 
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    FooterComponent,
    FichaEventoComponent,
    EventComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  

})

export class AppComponent {
  title = 'front-end';
}
