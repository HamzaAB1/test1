import { Routes } from '@angular/router';
import { MeteoComponent } from './components/meteo/meteo.component';

export const routes: Routes = [
    { path: 'mars', component: MeteoComponent },
    { path: '**', redirectTo: '/mars', pathMatch: 'full'  },
];