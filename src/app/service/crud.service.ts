import { Injectable } from '@angular/core';
import { Jeux } from './jeux';
import { catchError, map } from 'rxjs/operators';
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
    return this.http.post(baseUrl, data);
  }

  updateJeux(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteJeux(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Jeux[]> {
    return this.http.get<Jeux[]>(`${baseUrl}?title=${title}`);
  }
}