import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/entities/profile';
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


  profile_imgs = [
    "https://gravatar.com/avatar/58918a263cc22d25ebc3ac06768c55ab?s=200&d=robohash&r=x",
    "https://gravatar.com/avatar/9d378207dd2cd98f9091fb7f0d6bffe5?s=200&d=robohash&r=x",
    "https://gravatar.com/avatar/f10106bdc69005e6f50e710583282133?s=200&d=robohash&r=x",
    "https://gravatar.com/avatar/83161397e6cc2400bef1371dc6e3fbbe?s=200&d=robohash&r=x",
    "https://gravatar.com/avatar/1b3adf455ec5a02305de79c56464fc9b?s=200&d=robohash&r=x"
  ]
  constructor(private router: Router,private keycloakService: KeycloakService,private userService: UserService) { 
    this.keycloakService.loadUserProfile().then(data =>{
      this.user_id = data.id;
      console.log(data.id)
    })
  }
  

  ngOnInit(): void {
    this.profiles = this.userService.getAllProfiles((this.user_id as string))
    this.profiles.subscribe(x=> {
      console.log(x)
    })
    console.log( this.profiles)
  }
  onClick(){
    this.router.navigateByUrl("/browse");
  }
  logout(): void {
    this.keycloakService.logout();
  }

}
