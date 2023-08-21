import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AccountService) {}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const authToken = this.authService.getToken()
    return next.handle(httpRequest.clone({ setHeaders: { authorization: `Bearer ${authToken}`  } 
  }));
  }
}
