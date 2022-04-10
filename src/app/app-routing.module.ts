import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utility/app.guard';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] },
  { path: 'browse', loadChildren: () => import('./modules/browse/browse.module').then(m => m.BrowseModule), canActivate: [AuthGuard] },
  { path: 'watch/:video_guid', loadChildren: () => import('./modules/watch/watch.module').then(m => m.WatchModule), canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 