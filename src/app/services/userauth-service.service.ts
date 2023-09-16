import { Injectable } from '@angular/core';
import { IUser } from '../app-component.interface';
import { LocalStorageService } from './local-storage.service';

const USER_KEY: string = 'SpotifyUserData';
@Injectable()
export class UserAuthService {
  public userDetails!: IUser;
  constructor(
    public readonly localStorage: LocalStorageService
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
}
