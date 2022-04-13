import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from 'src/app/components/profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-edit-routing.module';



@NgModule({
  declarations: [ProfileEditComponent],
  imports: [
    ProfileRoutingModule,
    CommonModule
  ]
})
export class ProfileEditModule { }
