import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common'
import { filter, pairwise } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from 'src/app/entities/profile';
import { environment } from 'src/app/environments/services.environment';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profileId! :any;
  index!:any;
  previousUrl! :any;
  profiles!: Observable<Profile[]>;
  profile!: Profile;



  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private userService: UserService) { 
    this.profileId = this.route.snapshot.paramMap.get('id')
    this.index = this.route.snapshot.paramMap.get('index')

    console.log(this.profileId )

    this.router.events
    .pipe( filter(        (evt:any)=>evt instanceof RoutesRecognized),pairwise())
    .subscribe((events: RoutesRecognized[]) =>{        
      this.previousUrl = events[0].urlAfterRedirects;
      }   
    );
    this.userService.getAllProfiles((this.profileId as string)).subscribe(profiles => {
      this.profile = profiles[this.index]

    }
    )

  }

  ngOnInit(): void {

  }

  back(){
    this.router.navigate(["/manageprofiles/" + (this.profileId as string)])
}

  SaveChanges(){

  }
  EditUserData() {
    const url = environment.keycloakUrl +'/realms/micflix/account/';
    window.open(url, '_blank');
  }
}
