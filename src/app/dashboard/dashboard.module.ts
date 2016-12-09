import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CpuUsageComponent } from './cpu-usage/cpu-usage.component';
import { DashboardRoutes } from './dashboard.routes';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  imports: [DashboardRoutes],
  declarations: [DashboardComponent, CpuUsageComponent, WidgetComponent]
})
export class DashboardModule { }
