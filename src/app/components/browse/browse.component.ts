import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd} from '@angular/router';
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

  constructor(private router: Router,private keycloakService: KeycloakService) {
   }

  ngOnInit(): void {
    this.initializeUserOptions();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }


  logout(): void {
    this.keycloakService.logout();
  }

  back(){
    this.router.navigateByUrl('/profile');
  }
}
