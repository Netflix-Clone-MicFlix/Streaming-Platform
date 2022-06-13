import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/entities/profile';
import { PROFILE_IMGS } from 'src/app/root/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-manage',
  templateUrl: './profile-manage.component.html',
  styleUrls: ['./profile-manage.component.css']
})
export class ProfileManageComponent implements OnInit {

  // profiles: Observable<Profile[]>;
  user_id!:any ;
  profiles!: Observable<Profile[]>;
  profile_imgs : string[] = []

  
  constructor(private router: Router,private route: ActivatedRoute,private keycloakService: KeycloakService,private userService: UserService) { 
    this.profile_imgs = PROFILE_IMGS;
    this.user_id = this.route.snapshot.paramMap.get('id')

  }
  

  ngOnInit(): void {
    this.profiles = this.userService.getAllProfiles((this.user_id as string))
  }

  back(){
    this.router.navigateByUrl("/profile");
  }
  onClick(index:number){
    this.router.navigate(["/manageprofiles/edit", this.user_id,index]);
  }

}
