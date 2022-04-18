import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/entities/movie';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css']
})
export class CarouselHolderComponent implements OnInit  {

  @Input() genre = ''
  movies: Observable<Movie[]>;


    constructor(private router: Router,private movieService: MovieService) {
      this.movies = this.movieService.getAllMovies()
    }


    
    ngOnInit(): void {


   }

    onClick(video_guid:string): void { 
      this.router.navigateByUrl(`/watch/${video_guid}`);
    }

}
