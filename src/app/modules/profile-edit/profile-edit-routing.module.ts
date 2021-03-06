import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditComponent } from 'src/app/components/profile-edit/profile-edit.component';

const routes: Routes = [
    { path: '', component: ProfileEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }