import { Routes } from '@angular/router';
import { CompanyProfileComponent } from './Authentication/CompanyProfile/company-profile/company-profile.component';
import { ProfileComponent } from './Authentication/Profile/profile/profile.component';


export const routes: Routes = [
    {
        path: 'company',
        component: CompanyProfileComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];
