import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { GENRES } from 'src/app/root/constants';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  user = '';
  genres = GENRES

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout();
  }
}
