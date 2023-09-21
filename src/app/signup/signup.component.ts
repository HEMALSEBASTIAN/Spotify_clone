import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../app-component.interface';
import { UserAuthService } from '../services/userauth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user!: IUser;
  public error: boolean = false;
  public signUpGroup!: FormGroup
  public formError: boolean = false;
  public passwordError: boolean = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserAuthService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.signUpGroup = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      name: ["", Validators.required],
      year: ["", Validators.required],
      month: ["", Validators.required],
      day: ["", Validators.required],
      gender: ["", Validators.required]
    });
  }

  public onSubmit(): void {
    //change logic to all field required
    if (!this.signUpGroup.valid) {
      this.formError = true;
    }
    else {
      this.formError = false;
      const { name,
        email,
        password,
        confirmPassword,
        year,
        month,
        day,
        gender } = this.signUpGroup.value;

      console.log(this.signUpGroup.value);

      if (password === confirmPassword) {
        this.passwordError = false;
        this.user = {
          name: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          year: year,
          month: month,
          day: day,
          gender: gender
        }
        this.userService.setUserDetails(this.user);
        this.route.navigate(['loginpage']);

      }
      else {
        this.passwordError = true;
      }
    }

  }
}
