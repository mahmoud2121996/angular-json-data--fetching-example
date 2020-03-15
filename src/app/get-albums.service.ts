import { Injectable } from '@angular/core';
import { Album } from './album';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetAlbumsService {
  private url = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) { }
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.url).pipe(catchError(() => {
      return throwError('server error happend...');
    }));
  }
}
