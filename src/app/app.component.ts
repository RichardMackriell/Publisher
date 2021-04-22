import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter, flatMap, map } from 'rxjs/operators';
import { LoginPageComponent } from './public/login-page/login-page.component';
import { AuthService } from './services/auth.service';
import { MultiService } from './services/multi.service';
import { PublisherDto, PublishersService } from './services/publishers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

  isLoggedIn = false;


  title = 'Publisher App';
  publishers: string[] = [];
  
  private subs: Subscription[];

  constructor(
    private publishersService: PublishersService, 
    private authService: AuthService,
    private multiService: MultiService) { }
  
  ngOnInit() {
    this.authService.onLoggedIn.subscribe(
      changed => this.isLoggedIn = changed
    );
  }

  getPublishers() {
    this.subs.push(this.publishersService.getPublishers()
      .pipe(
        flatMap(p => p),
        map(p => p.name),
        filter(n => n.length > 5)
      )
      .subscribe(
        next => this.publishers.push(next)
      ));
  }
  clear() {
    this.publishers = null;
  }

  ngOnDestroy() {
    for(let sub of this.subs) {
      if(!sub?.closed)
        sub.unsubscribe();
    }
  }
}
