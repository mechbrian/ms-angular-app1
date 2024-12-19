import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselItem {
  image: string;
  text?: string;
  link: string;
  altText?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})

export class CarouselComponent implements OnInit, OnDestroy {
  @Input() carouselItems: CarouselItem[] = [];

  currentIndex: number = 0;
  slideInterval: any; //?

  ngOnInit(): void {
    if (this.carouselItems.length > 1) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide(){
    if(this.slideInterval){
      clearInterval(this.slideInterval);
    }
  }
}
