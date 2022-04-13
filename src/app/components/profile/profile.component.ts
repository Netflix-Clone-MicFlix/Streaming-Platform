import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/entities/profile';
import { PROFILE_IMGS } from 'src/app/root/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // profiles: Observable<Profile[]>;
  user_id!:any ;
  profiles!: Observable<Profile[]>;
  profile_imgs : string[] = []


  constructor(private router: Router,private keycloakService: KeycloakService,private userService: UserService) { 


    this.profile_imgs = PROFILE_IMGS;
    this.keycloakService.loadUserProfile().then(data =>{
      this.user_id = data.id;
      console.log(data.id)
    })
  }
  

  ngOnInit(): void {
    this.profiles = this.userService.getAllProfiles((this.user_id as string))
  }
  onClick(){
    this.router.navigateByUrl("/browse");
  }
  logout(): void {
    this.keycloakService.logout();
  }

  manageProfiles(){
    this.router.navigate(["/manageprofiles",this.user_id]);
  }

}
