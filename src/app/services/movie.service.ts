import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from '../entities/movie';
import { environment } from '../environments/services.environment';
import { Genre } from '../entities/genre';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getAllMovies (): Observable<Movie[]> {
    return this.http.get<Movie[]>(environment.movieService);
  }
  public getMovieById (guid:string): Observable<Movie> {
    let url = environment.movieService + "/" + guid
    return this.http.get<Movie>(url);
  }
  public getAllGenres (): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${environment.movieService}/genre`);
  }
}
