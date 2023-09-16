import { Component } from '@angular/core';
import { LoginCredentials } from '../login.user.crediential.Interface';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  constructor(private localStorageService: LocalStorageService){}

  user: LoginCredentials = {
    email: "",
    password: ""
  }
  onSubmit(){
    // get the user details from the services and check if the user exist and if it does direct to log in 
    // if user exist hide the login signup button and give a message of Hi "username" in that place
    //if it doesen't show up something that was hidden in red text in the html page that invalid username/password

    const enteredEmail = this.user.email;
    const enteredPassword = this.user.password;
    const storedUser = this.localStorageService.get(enteredEmail);

    if (
      storedUser &&
      enteredEmail === storedUser.email &&
      enteredPassword === storedUser.password
    ) {
      console.log('Login successful');
    } else {
      console.error('Invalid credentials');
    }
    

    
    
    

  }
}
