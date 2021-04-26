import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventLogComponent } from './event-log/event-log.component';
import { PerformanceAnalyticsComponent } from './performance-analytics/performance-analytics.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SpecificationComponent } from './specification/specification.component';
import { UserAnalyticsComponent } from './user-analytics/user-analytics.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'users', component: UserAnalyticsComponent },
            { path: 'performance', component: PerformanceAnalyticsComponent }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'servers', component: ServersComponent },
    {
        path: 'server/:id', component: ServerComponent,
        children: [
            { path: 'spec', component: SpecificationComponent },
            { path: 'events/:type', component: EventLogComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }