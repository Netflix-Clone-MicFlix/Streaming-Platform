import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileManageComponent } from 'src/app/components/profile-manage/profile-manage.component';
import { ProfileRoutingModule } from './profile-manage-routing.module';



@NgModule({
  declarations: [ProfileManageComponent],
  imports: [
    ProfileRoutingModule,
    CommonModule
  ]
})
export class ProfileManageModule { }
