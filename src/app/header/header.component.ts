import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private viewpostScroller: ViewportScroller) {}
  scrollToFooter(): void {
    this.viewpostScroller.scrollToAnchor('footer');
  }
}
