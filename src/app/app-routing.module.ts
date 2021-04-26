import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EventLogComponent } from './admin/event-log/event-log.component';
import { PerformanceAnalyticsComponent } from './admin/performance-analytics/performance-analytics.component';
import { ServerComponent } from './admin/server/server.component';
import { ServersComponent } from './admin/servers/servers.component';
import { SpecificationComponent } from './admin/specification/specification.component';
import { UserAnalyticsComponent } from './admin/user-analytics/user-analytics.component';
import { AdminGuard } from './guards/admin.guard';
import { AboutPageComponent } from './public/about-page/about-page.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { ParentComponent } from './public/parent/parent.component';
import { PipeTestComponent } from './public/pipe-test/pipe-test.component';


const routes: Routes = [
  { path: 'home/:id', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },

  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren:() => import('./admin/admin.module').then(a => a.AdminModule)},
  
  { path: 'pipes', component: PipeTestComponent },
  { path: 'projection', component: ParentComponent },
  { path: '', redirectTo: 'home/1', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }


  // { path: 'dashboard', component: DashboardComponent,
  //   canActivate: [AdminGuard],
  //     children: [
  //       { path: 'users', component: UserAnalyticsComponent },
  //       { path: 'performance', component: PerformanceAnalyticsComponent }
  //   ]
  // },
  // { path: 'servers', component: ServersComponent },
  // { path: 'server/:id', component: ServerComponent,
  //   children: [
  //     { path: 'spec', component: SpecificationComponent},
  //     { path: 'events/:type', component: EventLogComponent}
  //   ]}, 
  //{ path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
