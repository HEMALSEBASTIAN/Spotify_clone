import { Component } from '@angular/core';
import { LoginCredentials } from '../login.user.crediential.Interface';
import { Router } from '@angular/router';
import { IUser } from '../app-component.interface';
import { UserAuthService } from '../services/userauth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userAuth: UserAuthService, private router: Router, private apiService: ApiService) {
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

  onSubmit(){
  
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


  validateLogin(): void{

    const credentials = {
      email: this.LoginUser.email,
      password: this.LoginUser.password
    };
  
    if ( this.userAuth.validateUser(this.LoginUser)) {
      this.router.navigate(['bodyContainer']); // route only after getting the jwt packet
      this.apiService.authenticateUser(credentials).subscribe(
        (response) => {
          const jwtToken = response.token; 
          // Store the token in a secure place (e.g., local storage)
        },
        (error) => {
          console.error('Authentication error:', error);
        }
      );
    } else {
      console.error('Invalid credentials');
      this.isInvalid = true;  
    }
  }
}
