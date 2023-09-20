import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  private baseUrl = 'https://your-api-url.com/api/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  authenticateUser(credentials: { email: string, password: string }): Observable<{ token: string }> {
    const url = this.baseUrl + 'auth/login'; 
    return this.http.post<{ token: string }>(url, credentials);
  }

}