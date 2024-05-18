import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{


  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;
  constructor() { }

  ngOnInit(): void {
    // Desactivo la transición automática del carrusel al inicializar el componente
    // this.carousel.nativeElement.carousel({
    //   interval: false // Desactivar la transición automática
    // });
  }

}
