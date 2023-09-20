import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("Jwt");
    if (token) {
      const tokenWithoutQuotes = token.replace(/^"(.*)"$/, '$1');
      request = request.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${tokenWithoutQuotes}`
          }
        }
      );
    }
    return next.handle(request);
  }
}
