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
      image: 'assets/daily.jpg',
      text: 'This is daily products',
      link: '#', // Placeholder link
      altText: 'Daily Products',
    },
    {
      image: 'assets/myles.jpg',
      text: 'This is the second picture',
      link: '#', // Placeholder link
      altText: 'Daily Products',
    },
  ];

}
