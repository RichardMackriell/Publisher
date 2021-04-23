import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  loggedIn: boolean = false;

  loginForm: FormGroup;

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get age() {
    return this.loginForm.get('age');
  }



  constructor(
    private authService: AuthService,
    private fb: FormBuilder) { }

    private emailSubscription: Subscription;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      age: this.fb.control('', this.ofDrinkingAge('UK'))    
    });
    
    this.username.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(
      value => {
        if(this.emailSubscription && !this.emailSubscription.closed)
          this.emailSubscription.unsubscribe();

        this.emailSubscription = this.authService.emailRegistered(value).subscribe(
          result => {
            console.log(result);
            if(result)
              this.username.setErrors(null);
          },
          error => {
            this.username.setErrors({
              emailTaken: true
            });
          }
        );
      }
    );
  }


  login() {
    this.loginForm.markAllAsTouched();

    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }




  ofDrinkingAge(location): ValidatorFn {
    return function(input: FormControl) {
      let age = location == "UK" ? 18 : 21;
      return input.value >= age ? null : {
        ofDrinkingAge: 
          { requiredAge: age, actualAge: input.value }
        };
    }
  }
}
