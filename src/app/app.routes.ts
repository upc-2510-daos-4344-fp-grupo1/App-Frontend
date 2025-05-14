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

import { CompanyProfileComponent } from './Authentication/CompanyProfile/company-profile/company-profile.component';
import { ProfileComponent } from './Authentication/Profile/profile/profile.component';
import { LoginComponent } from './Authentication/Login/login/login.component';
import { RegisterComponent } from './Authentication/Register/register/register.component';
import { InformationComponent } from './Authentication/Information/information/information.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path: 'company',
        component: CompanyProfileComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'info',
        component: InformationComponent
    }

];
