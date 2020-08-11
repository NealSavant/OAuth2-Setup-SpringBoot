import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpXhrBackend, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http'
import { throwError, Observable } from 'rxjs';
import { catchError, map, skip } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private baseUrl = environment.baseUrl;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };


  constructor(
    private backend: HttpXhrBackend
    ) {}


  getUserData() { 
    const request = new HttpRequest('GET', this.baseUrl + 'user', this.httpOptions);

    return this.backend.handle(request).pipe(     
      map((event: HttpResponse<any>) => {
        // if(event.status == 200){
          return event;
        // }
      }),

      skip(1), //skip the success packet identifying successful XHR request to backend

      catchError((err: any) => {
        return throwError('Error getting user info');
      })
    );

  }
}
