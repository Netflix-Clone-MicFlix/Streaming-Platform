import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common'
import { filter, pairwise } from 'rxjs/operators';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profileId! :any;
  previousUrl! :any;


  constructor(private route: ActivatedRoute,private router: Router,private location: Location) { 
    this.profileId = this.route.snapshot.paramMap.get('id')
    console.log(this.profileId )

    this.router.events
    .pipe( filter(        (evt:any)=>evt instanceof RoutesRecognized),pairwise())
    .subscribe((events: RoutesRecognized[]) =>{        
      this.previousUrl = events[0].urlAfterRedirects;
      }   );
  }

  ngOnInit(): void {
  }

  back(){
    this.location.back()
  }

  SaveChanges(){

  }
}
