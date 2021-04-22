import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  onLoggedIn = new EventEmitter<boolean>();
  private isLoggedIn: boolean = false;

  get loggedIn() {
    return this.isLoggedIn;
  }

  constructor() { }

  login(username: string, password: string): boolean {
    if(username === "mackriel" && password === "hello") {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
    this.onLoggedIn.emit(this.isLoggedIn);
    return this.isLoggedIn;
  }
}
