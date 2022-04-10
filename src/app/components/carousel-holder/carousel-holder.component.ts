import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
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

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
    slides = [
      "https://dummyimage.com/350x150/423b42/fff",
      "https://dummyimage.com/350x150/2a2b7a/fff",
      "https://dummyimage.com/350x150/1a2b7a/fff",
      "https://dummyimage.com/350x150/7a2b7a/fff",
      "https://dummyimage.com/350x150/9a2b7a/fff",
      "https://dummyimage.com/350x150/5a2b7a/fff",
      "https://dummyimage.com/350x150/4a2b7a/fff"
    ];


    constructor(private router: Router,private movieService: MovieService) {
      this.movies = this.movieService.getAllMovies()
    }


    
    ngOnInit(): void {


   }

    onClick(video_guid:string): void { 
      this.router.navigateByUrl(`/watch/${video_guid}`);
    }

}
