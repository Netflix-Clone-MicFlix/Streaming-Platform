import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from 'src/app/components/watch/watch.component';
import { WatchRoutingModule } from './watch-routing.module';


@NgModule({
  declarations: [WatchComponent],
  imports: [
    WatchRoutingModule,
    CommonModule  
  ]
})
export class WatchModule { }
