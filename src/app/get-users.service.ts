import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(catchError(error => {
      if (error.status === 404) {
        console.log('error..');
        return throwError('server error happend...');
      }
    }));
  }

  handleError(error) {
    return 'error in server...';

  }

}
