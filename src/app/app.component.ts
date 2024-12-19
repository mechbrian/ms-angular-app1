import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import {Router, NavigationEnd} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { TechnologyComponent } from './technology/technology.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ServiceComponent } from './service/service.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';

interface CarouselItem {
  image: string;
  text?: string;
  link: string;
  altText?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    BannerComponent,
    ProductInfoComponent,
    TechnologyComponent,
    SidebarComponent,
    FooterComponent,
    PersonalInfoComponent,
    ServiceComponent,
    HeaderComponent,
    CarouselComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  isHome =true;  
  title = 'MSCIENCE';

  carouselData: CarouselItem[] = [
    {
      image: 'assets/daily.jpg',
      text: 'This is daily products',
      link: '#', // Placeholder link
      altText: 'Daily Products'
    },
    {
      image: 'assets/myles.jpg',
      text: 'This is the second picture',
      link: '#', // Placeholder link
      altText: 'Daily Products'
    }
  ];

  constructor(private router: Router)
  {
    // 監聽路由事件，根據當前路徑設置 isHome
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHome = event.url === '/'; // 當路徑為 '/' 時，設置 isHome 為 true
      });
  }
}
