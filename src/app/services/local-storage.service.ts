import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }
  public set(USER_KEY:string, VALUE: any)
  {
    localStorage.setItem(USER_KEY, JSON.stringify(VALUE));
  }
  public get(USER_KEY:string)
  {
    let userJSON=localStorage.getItem(USER_KEY);
    return JSON.parse(userJSON as string);
  }
}
