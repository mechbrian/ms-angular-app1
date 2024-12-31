import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { BannerComponent } from "../banner/banner.component";
import { CardListComponent } from "../card-list/card-list.component";

interface CarouselItem {
  image: string;
  text?: string;
  link: string;
  altText?: string;
}

interface BannerContent {
  image: string;
  text: string;
}

interface CardItem {
  title: string;
  description: string;
  image: string;
  altText?: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, BannerComponent, CardListComponent],
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

  homeBannerContent: BannerContent = {
    image: 'assets/homer.gif', // Replace with your image path
    text: 'Welcome to MSCIENCE!'
  };

  cardListData: CardItem[] = [
    {
      title: 'Myles',
      description: 'This is Myles',
      image: 'assets/myles01.jpg',
      altText: 'This is Myles',
      link: 'personal-info', // Placeholder link
    },
    {
      title: 'Luclane PN+',
      description: 'Luclane PN+',
      image: 'assets/pnplus01.png',
      altText: 'Luclane PN+',
      link: 'product/pnplus', // Placeholder link
    },
    {
      title: 'Professional Aesthetics Training',
      description: 'Training',
      image: 'assets/training01.jpg',
      altText: 'Training',
      link: 'training', // Placeholder link
    }
  ];

}
