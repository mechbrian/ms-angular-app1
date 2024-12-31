import { Component, OnInit, Input } from '@angular/core';

interface BannerContent{
  image:string;
  text:string;
}

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent implements OnInit {
  @Input() bannerContent: BannerContent = {image: '', text: ''};
  
  constructor() { }

  ngOnInit(): void {
  }
}
