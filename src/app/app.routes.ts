import { Routes } from '@angular/router';
import {SupportComponent} from './public/components/support/support.component';

export const routes: Routes = [
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
