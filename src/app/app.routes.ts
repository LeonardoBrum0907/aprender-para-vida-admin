import { Routes } from '@angular/router';
import { HelpedComponent } from './pages/helped/helped.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'volunteers',
    pathMatch: 'full'
  },
  {
    path: 'volunteers',
    component: VolunteersComponent
  },
  {
    path: 'helped',
    component: HelpedComponent
  },
];
