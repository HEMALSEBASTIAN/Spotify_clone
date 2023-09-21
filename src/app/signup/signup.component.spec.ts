import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { SignupComponent } from './signup.component';
import { UserAuthService } from '../services/userauth-service.service';
import { IUser } from '../app-component.interface';

fdescribe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let mockAuthService: jasmine.SpyObj<UserAuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('UserAuthService', ['setUserDetails']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        FormBuilder,
        { provide: UserAuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form group', () => {
    component.ngOnInit();
    expect(component.signUpGroup.get('email')).toBeTruthy();
    expect(component.signUpGroup.get('password')).toBeTruthy();
    // Add similar expectations for other form controls
  });

  it('should set formError to true when the form is invalid on submit', () => {
    component.ngOnInit(); // Initialize the form
    component.onSubmit(); // Submit with invalid form
    expect(component.formError).toBeTruthy();
  });

  it('should not set formError when the form is valid on submit', () => {
    component.ngOnInit(); // Initialize the form with valid values
    component.onSubmit(); // Submit with valid form
    expect(component.formError).toBeTruthy();
  });

  it('should set passwordError to true when password and confirmPassword do not match', () => {
    component.ngOnInit();
    component.signUpGroup.patchValue({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password1',
      confirmPassword: 'password2',
      year: 1990,
      month: 1,
      day: 11,
      gender: 'Male',
    });
    component.onSubmit();
    expect(component.passwordError).toBeTruthy();
  });

  it('should call setUserDetails and navigate when the form is valid and passwords match', () => {
    component.ngOnInit();
    const user: IUser = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password',
      confirmPassword: 'password',
      year: 1990,
      month: 1,
      day: 11,
      gender: 'Male',
    };
    component.signUpGroup.setValue(user);

    component.onSubmit();

    expect(component.passwordError).toBeFalsy();
    expect(mockAuthService.setUserDetails).toHaveBeenCalledWith(user);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['loginpage']);
  });

  // You can add more test cases to cover various scenarios
});
