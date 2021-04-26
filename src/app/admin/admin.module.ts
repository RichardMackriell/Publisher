import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserAnalyticsComponent } from './user-analytics/user-analytics.component';
import { PerformanceAnalyticsComponent } from './performance-analytics/performance-analytics.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { SpecificationComponent } from './specification/specification.component';
import { EventLogComponent } from './event-log/event-log.component';



@NgModule({
  declarations: [DashboardComponent, UserAnalyticsComponent, PerformanceAnalyticsComponent, ServersComponent, ServerComponent, SpecificationComponent, EventLogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
