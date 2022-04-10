import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { environment } from '../environments/services.environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  public getAllMovies (): Observable<User[]> {
    return this.http.get<User[]>(environment.userService);
  }

  public getAllProfiles (userId:string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.movieService}/profile/${userId}`);
  }

}
