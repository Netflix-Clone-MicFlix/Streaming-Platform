import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselHolderComponent } from 'src/app/components/carousel-holder/carousel-holder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [CarouselHolderComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports:[CarouselHolderComponent]
})
export class CarouselHolderModule { }
