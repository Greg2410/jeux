import { Injectable } from '@angular/core';
import { Jeux } from './jeux';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  REST_API: string = 'http://127.0.0.1:3333';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }
  // Add
  AddJeux(data: Jeux): Observable<any> {
    let API_URL = `${this.REST_API}/create/`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Get all objects
  GetJeux() {
    return this.httpClient.get(`${this.REST_API}/game/`);
  }
  // Get single object
  GetJeu(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/game/get/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateJeux(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/put/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteJeux(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}