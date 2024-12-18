import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private viewpostScroller: ViewportScroller) {}
  scrollToFooter(): void {
    this.viewpostScroller.scrollToAnchor('footer');
  }
}
