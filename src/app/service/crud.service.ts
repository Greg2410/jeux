import { Injectable } from '@angular/core';
import { Jeux } from './jeux';
import { catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const baseUrl = 'http://127.0.0.1:3333/game';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  GetJeux(): Observable<Jeux[]> {
    return this.http.get<Jeux[]>(baseUrl);
  }

  GetJeu(id: any) {
    return this.http.get(`${baseUrl}/get/${id}`);
  }

  AddJeux(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/create/`, data);
  }

  // Edit/ Update 
  updateJeux(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/put/?id=${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  deleteJeux(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/?id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}