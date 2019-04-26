import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

import { User } from './models/user.interface';
import { environment } from '../../environments/environment';

const apiUrl: string = environment.apiUrl;

// {providedIn: 'root'}
@Injectable()

export class DashboardUserService {
  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get(`${apiUrl}/users/${id}`)
      .pipe(map((response: User) => response))
      .pipe(catchError(this.handleError));
  }

  getUsers(sort, order, page, limit): Observable<User[]> {
    return this.http.get(`${apiUrl}/users`, {
      params: new HttpParams()
        // .set('id', id.toString())
        .set('_sort', sort)
        .set('_order', order)
        .set('_page', (page + 1).toString())
        .set('_limit', limit.toString())})
      .pipe(map((response: User[]) => response))
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    const htttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(`${apiUrl}/users/${user.id}`, user, htttpOptions)
      .pipe(map((response: User) => response))
      .pipe(catchError(this.handleError));
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete(`${apiUrl}/users/${user.id}`)
      .pipe(map((reponse: User) => reponse))
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
