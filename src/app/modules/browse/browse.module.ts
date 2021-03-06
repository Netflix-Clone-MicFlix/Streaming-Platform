import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from 'src/app/components/browse/browse.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { CarouselHolderModule } from '../carousel-holder/carousel-holder.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [BrowseComponent],
  imports: [
    CommonModule,
    BrowseRoutingModule,
    CarouselHolderModule,
    NavbarModule
  ]
})
export class BrowseModule { }
