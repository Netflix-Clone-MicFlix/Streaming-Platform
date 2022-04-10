import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/entities/movie';
import { GENRES } from 'src/app/root/constants';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  user = '';
  genres = GENRES

  constructor(private keycloakService: KeycloakService,private movieService: MovieService) {
   }

  ngOnInit(): void {this.initializeUserOptions();}

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }


  logout(): void {
    this.keycloakService.logout();
  }

  
}
