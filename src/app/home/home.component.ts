import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { BannerComponent } from '../banner/banner.component';
import { CardListComponent } from '../card-list/card-list.component';
import { InstagramComponent } from '../instagram/instagram.component';
import { CommonModule } from '@angular/common';
import { EventComponent } from '../event/event.component';
import { Event } from '../event/event.component';
import { RouterModule } from '@angular/router';
import { EventService } from '../event.service';

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
  imports: [
    CarouselComponent,
    BannerComponent,
    CardListComponent,
    InstagramComponent,
    CommonModule,
    EventComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  
  events: Event[] = [];
  // events: Event[] = [
  //   {
  //     image: 'assets/homer01.jpg',
  //     index: '1',
  //     name: 'Angular Conference 2024',
  //     date: new Date('2024-06-15'),
  //     time: '10:00 AM',
  //     location: 'New York Convention Center',
  //     description: 'Join us for a day of Angular insights and networking.',
  //   },
  //   {
  //     image: 'assets/homer01.jpg',
  //     index: '2',
  //     name: 'Web Development Workshop',
  //     date: new Date('2024-07-20'),
  //     time: '2:00 PM',
  //     location: 'San Francisco Tech Hub',
  //     description:
  //       'Hands-on workshop covering the latest in web technologies.',
  //   },
  //   {
  //     image: 'assets/homer01.jpg',
  //     index: '3',
  //     name: 'Startup Pitch Night',
  //     date: new Date('2024-08-05'),
  //     time: '6:00 PM',
  //     location: 'Los Angeles Startup Loft',
  //     description:
  //       'Watch startups pitch their ideas to investors and mentors.',
  //   },
  //   {
  //     image: 'assets/homer01.jpg',
  //     index: '4',
  //     name: 'Tech Meetup',
  //     date: new Date('2024-09-10'),
  //     time: '5:00 PM',
  //     location: 'Chicago Innovation Center',
  //     description:
  //       'Monthly meetup for tech enthusiasts to discuss trends and projects.',
  //   },
  // ];

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
    },
  ];

  homeBannerContent: BannerContent = {
    image: 'assets/homer.gif', // Replace with your image path
    text: 'Welcome to MSCIENCE!',
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
    },
  ];

  constructor(private eventService: EventService) {      }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
