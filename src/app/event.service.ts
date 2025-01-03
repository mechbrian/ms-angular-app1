import { Injectable } from '@angular/core';
import { Event } from './event/event.component';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private events: Event[] = [
    {
      image: 'assets/homer01.jpg',
      index: '1',
      name: 'Angular Conference 2024',
      date: new Date('2024-06-15'),
      time: '10:00 AM',
      location: 'New York Convention Center',
      description: 'Join us for a day of Angular insights and networking.',
    },
    {
      image: 'assets/homer01.jpg',
      index: '2',
      name: 'Web Development Workshop',
      date: new Date('2024-07-20'),
      time: '2:00 PM',
      location: 'San Francisco Tech Hub',
      description:
        'Hands-on workshop covering the latest in web technologies.',
    },
    {
      image: 'assets/homer01.jpg',
      index: '3',
      name: 'Startup Pitch Night',
      date: new Date('2024-08-05'),
      time: '6:00 PM',
      location: 'Los Angeles Startup Loft',
      description:
        'Watch startups pitch their ideas to investors and mentors.',
    },
    {
      image: 'assets/homer01.jpg',
      index: '4',
      name: 'Tech Meetup',
      date: new Date('2024-09-10'),
      time: '5:00 PM',
      location: 'Chicago Innovation Center',
      description:
        'Monthly meetup for tech enthusiasts to discuss trends and projects.',
    },
  ];

  constructor() { }

  getEvents(): Event[] {
    return this.events;
  }

  getEventByIndex(index: string): Event | undefined {
    return this.events.find((event) => event.index === index);
  }
}
