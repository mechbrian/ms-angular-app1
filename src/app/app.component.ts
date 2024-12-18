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
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isHome =true;  
  title = 'ms-angular-app1';

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
