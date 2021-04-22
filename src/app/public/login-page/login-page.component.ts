import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  loggedIn: boolean = false;
  username: string = "";
  password: string = "";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.username, this.password);
  }
}
