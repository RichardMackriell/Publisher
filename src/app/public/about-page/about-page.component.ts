import { Component, OnInit } from '@angular/core';
import { MessageBusService } from 'src/app/event/message-bus.service';
import { AuthService } from 'src/app/services/auth.service';
import { MultiService } from 'src/app/services/multi.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {

  isLoggedIn = false;
  constructor(public authService: AuthService,
    private multiService: MultiService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.loggedIn;
  }

}
