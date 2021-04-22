import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './public/about-page/about-page.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';


const routes: Routes = [
  { path: 'home/:id', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  //{ path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
