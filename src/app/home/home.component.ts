import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

interface CarouselItem {
  image: string;
  text?: string;
  link: string;
  altText?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {

  carouselData: CarouselItem[] = [
    {
      image: 'assets/myles01.jpg',
      text: 'This is Myles',
      link: 'personal-info', // Placeholder link
      altText: 'Daily Products',
    },
    {
      image: 'assets/pnplus01.png',
      text: 'Luclane PN+',
      link: 'product/pnplus', // Placeholder link
      altText: 'Luclane PN+',
    },
    {
      image: 'assets/training01.jpg',
      text: 'Professional Aesthetics Training',
      link: 'training', // Placeholder link
      altText: 'training',
    }
  ];

}
