import { Component } from '@angular/core';
import { LoginCredentials } from '../login.user.crediential.Interface';
import { Router } from '@angular/router';
import { IUser } from '../app-component.interface';
import { UserAuthService } from '../services/userauth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userAuth: UserAuthService,
    private router: Router, private apiService: ApiService,
    private localStorage: LocalStorageService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  isInvalid: boolean = false;

  LoginUser: Partial<IUser> = {
    email: "",
    password: ""
  }

  onSubmit() {

    if (!this.loginForm.valid) {
      this.isInvalid = true;
    }
    else {
      this.isInvalid = false;
      console.log(this.loginForm.value);
      this.LoginUser.email = this.loginForm.get('email')?.value;
      this.LoginUser.password = this.loginForm.get('password')?.value;
      this.validateLogin();
    }

  }


  validateLogin(): void {

    const credentials = {
      email: this.LoginUser.email as string,
      password: this.LoginUser.password as string
    };

    this.apiService.authenticateUser(credentials).subscribe(
      (response) => {

        const jwtToken = response;
        this.localStorage.set("Jwt", jwtToken);
        // Store the token in a secure place (e.g., local storage)
        this.router.navigate(['bodyContainer']); // route only after getting the jwt packet
      },
      (error) => {
        console.error('Authentication error:', error);
      }
    );
  }


}
