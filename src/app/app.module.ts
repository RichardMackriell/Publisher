import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './public/about-page/about-page.component';
import { HomePageComponent } from './public/home-page/home-page.component';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StatefulPipe } from './pipes/stateful.pipe';
import { PipeTestComponent } from './public/pipe-test/pipe-test.component';
import { InstancesPipe } from './pipes/instances.pipe';
import { ParentComponent } from './public/parent/parent.component';
import { ChildComponent } from './public/child/child.component';
import { SubChildComponent } from './public/sub-child/sub-child.component';
import { ChangeColourDirective } from './directives/change-colour.directive';
import { NotFoundComponent } from './public/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    AboutPageComponent,
    HomePageComponent,
    LoginPageComponent,
    StatefulPipe,
    PipeTestComponent,
    InstancesPipe,
    ParentComponent,
    ChildComponent,
    SubChildComponent,
    ChangeColourDirective,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
