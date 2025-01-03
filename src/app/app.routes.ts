import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { EventComponent } from './event/event.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // 首頁
  { path: 'personal-info', component: PersonalInfoComponent }, // 個人介紹頁
  { path: 'product/:id', component: ProductComponent }, // 產品頁
  { path: 'training', component: ServiceComponent }, //服務頁
  { path: 'event/:id', component: EventComponent }, //事件
  // other routes
];
