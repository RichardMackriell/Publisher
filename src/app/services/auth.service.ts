import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  onLoggedIn = new EventEmitter<boolean>();
  private isLoggedIn: boolean = false;

  get loggedIn() {
    return this.isLoggedIn;
  }

  constructor(private http: HttpClient) { }

  login(data: {username: string, password: string}): boolean {
    if(data.username === "mackriel" && data.password === "hello") {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
    this.onLoggedIn.emit(this.isLoggedIn);
    return this.isLoggedIn;
  }
  emailRegistered(email: string): Observable<boolean> {
    return this.http.post<boolean>(
      'https://localhost:44391/api/Publishers/EmailAlreadyRegistered',
      {
        email: email
      });
  }
}
