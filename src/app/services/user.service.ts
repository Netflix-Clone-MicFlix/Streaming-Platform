import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../entities/profile';
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

  public getAllProfiles (userId:string): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.userService}/profile/${userId}`);
  }

}
