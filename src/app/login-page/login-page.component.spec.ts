import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from './login-page.component';
import { UserAuthService } from '../services/userauth-service.service';
import { ApiService } from '../services/api-service.service';
import { LocalStorageService } from '../services/local-storage.service';
import { of, throwError } from 'rxjs';

fdescribe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let userAuthService: jasmine.SpyObj<UserAuthService>;
  let apiService: jasmine.SpyObj<ApiService>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    userAuthService = jasmine.createSpyObj('UserAuthService', ['authenticateUser']);
    apiService = jasmine.createSpyObj('ApiService', ['authenticateUser']);
    localStorageService = jasmine.createSpyObj('LocalStorageService', ['set']);
    

    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: UserAuthService, useValue: userAuthService },
        { provide: ApiService, useValue: apiService },
        { provide: LocalStorageService, useValue: localStorageService },
      ],
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty fields', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

  it('should set isInvalid to true when the form is invalid', () => {
    component.loginForm.setValue({ email: 'test@example.com', password: '' });
    component.onSubmit();
    expect(component.isInvalid).toBe(true);
  });

  it('should call validateLogin when the form is valid', () => {
    component.loginForm.setValue({ email: 'test@example.com', password: 'password' });
    spyOn(component, 'validateLogin');
    component.onSubmit();
    expect(component.validateLogin).toHaveBeenCalled();
  });

});
