import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventService } from '../event.service';

export interface Event {
  image: string;
  index: string;
  name: string;
  date: Date;
  time: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})

export class EventComponent implements OnInit {
  event?: Event;

  constructor(private route: ActivatedRoute,
    private eventService: EventService) {     
    console.log('EventComponent constructor:', this.eventService.getEvents());  
  }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
    console.log('the route:', this.route.snapshot.paramMap);
    console.log('the index:', index);
    if (index) {
      this.event = this.eventService.getEventByIndex(index);
    }
    console.log('EventComponent ngOnInit:', this.event);
  }
}
