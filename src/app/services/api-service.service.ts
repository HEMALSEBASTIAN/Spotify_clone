import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = 'https://localhost:7147/';

  constructor(private http: HttpClient) { }

  authenticateUser(credentials: { email: string, password: string }): Observable<{ token: string }> {
    const url = this.baseUrl + 'authenticate';
    return this.http.post<{ token: string }>(url, credentials);
  }

  authorizeUser() {
    const url = this.baseUrl + 'authorization';
    return this.http.get(url);
  }

}