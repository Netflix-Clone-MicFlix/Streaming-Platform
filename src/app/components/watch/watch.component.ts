import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/entities/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  urlMovieId!: any;
  movie!: Movie;
  movieDataLoaded!: Promise<boolean>;


  constructor(private route: ActivatedRoute,private movieService: MovieService) { 


  }

  ngOnInit(): void {
    if (!this.route.snapshot.paramMap.get("video_guid")) {
      this.urlMovieId = "0"
    } else {
      this.urlMovieId = this.route.snapshot.paramMap.get("video_guid");
    }

    this.movieService.getMovieById(this.urlMovieId).subscribe( (data) => {this.movie = data; this.movieDataLoaded = Promise.resolve(true);})
  }



}
