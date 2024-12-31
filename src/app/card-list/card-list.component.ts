import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Item {
  title: string;
  description: string;
  image: string;
  altText?: string;
  link: string;
}

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent implements OnInit {
  @Input() items: Item[] = [];

  // 用於追蹤圖片加載錯誤的索引
  imageErrorIndices = new Set<number>();

  constructor() {}

  ngOnInit(): void {
    console.log('CardListComponent initialized with items:', this.items);

    //for loop if item.image is empty, set item.image to a default image
    for (let i = 0; i < this.items.length; i++) {
      if (!this.items[i].image) {
        // this.items[i].image = 'assets/placeholder.png';
        this.imageErrorIndices.add(i);
      }
    }
  }
}
