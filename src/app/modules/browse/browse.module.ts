import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from 'src/app/components/browse/browse.component';
import { HomeRoutingModule } from './browse-routing.module';
import { CarouselHolderModule } from '../carousel-holder/carousel-holder.module';



@NgModule({
  declarations: [BrowseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselHolderModule
  ]
})
export class BrowseModule { }
