import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'personal-info', component: PersonalInfoComponent }, // 個人介紹頁
  // other routes
];
