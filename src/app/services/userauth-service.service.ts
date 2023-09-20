import { Injectable } from '@angular/core';
import { IUser } from '../app-component.interface';
import { LocalStorageService } from './local-storage.service';
import { ApiService } from './api-service.service';
import { Observable, catchError, map, of } from 'rxjs';

const USER_KEY: string = 'SpotifyUserData';
@Injectable()
export class UserAuthService {
  public userDetails!: IUser;
  constructor(
    public readonly localStorage: LocalStorageService,
    public readonly api: ApiService
  ) { }
  public getUserDetails(): IUser {
    this.userDetails = this.localStorage.get(USER_KEY);
    return this.userDetails;
  }
  public setUserDetails(userData: IUser) {
    this.localStorage.set(USER_KEY, userData);
    this.userDetails = userData;
  }
  public validateUser(passedUserData: Partial<IUser>): boolean {
    this.getUserDetails();
    return this.userDetails?.email == passedUserData.email && this.userDetails?.confirmPassword === passedUserData.password;

  }
  getAuthStatus(): Observable<boolean> {
    return this.api.authorizeUser().pipe(
      map((response) => true), // Assuming success means authenticated
      catchError((error) => {
        // Handle the error (e.g., token invalid or expired)
        return of(false); // Return false for unauthenticated
      })
    );
  }
}
