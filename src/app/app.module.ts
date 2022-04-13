import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { initializeKeycloak } from './utility/app.init';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WatchModule } from './modules/watch/watch.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { ProfileModule } from './modules/profile/profile.module';
import { ProfileManageModule } from './modules/profile-manage/profile-manage.module';
import { ProfileEditModule } from './modules/profile-edit/profile-edit.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WatchModule,
    AppRoutingModule,
    ProfileModule,
    ProfileManageModule,
    ProfileEditModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
  ],
  providers: [    {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },],
  bootstrap: [AppComponent]

})
export class AppModule { }
