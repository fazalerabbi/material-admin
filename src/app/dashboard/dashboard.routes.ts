import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const app_routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
];

export const DashboardRoutes = RouterModule.forChild(app_routes);
