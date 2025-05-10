import { Routes } from '@angular/router';
import { NavbarComponent } from '../public/navbar/navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
