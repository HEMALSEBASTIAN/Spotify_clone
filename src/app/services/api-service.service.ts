import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDummyResponse } from '../app-component.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl="https://dummyjson.com/users";
  constructor(private readonly http: HttpClient) { }

  get(): Observable<IDummyResponse>{
    return this.http.get<IDummyResponse>(`${this.apiUrl}`);
  }
}
