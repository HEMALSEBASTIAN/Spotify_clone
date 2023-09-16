import { Component } from '@angular/core';
import { LoginCredentials } from '../login.user.crediential.Interface';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { IUser } from '../app-component.interface';
import { UserAuthService } from '../services/userauth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  constructor(private userAuth : UserAuthService, private route: Router){}

  isInvalid: boolean = false;

  user: LoginCredentials = {
    email: "",
    password: ""
  }

  LoginUser: Partial<IUser> = {
    email: "",
    password: ""
  }

  onSubmit(){
  
    this.LoginUser.email = this.user.email;
    this.LoginUser.password = this.user.password;

    if (
      this.userAuth.validateUser(this.LoginUser)
    ) {
      this.route.navigate(['bodyContainer']);
    } else {
      console.error('Invalid credentials');
      this.isInvalid = true;  
    }

  }
}
