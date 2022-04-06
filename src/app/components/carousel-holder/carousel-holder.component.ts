import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css']
})
export class CarouselHolderComponent  {

  @Input() genre = ''

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
    slides = [
      {id: '1', img: "https://dummyimage.com/350x150/423b42/fff"},
      {id: '2', img: "https://dummyimage.com/350x150/2a2b7a/fff"},
      {id: '3', img: "https://dummyimage.com/350x150/1a2b7a/fff"},
      {id: '4', img: "https://dummyimage.com/350x150/7a2b7a/fff"},
      {id: '5', img: "https://dummyimage.com/350x150/9a2b7a/fff"},
      {id: '6', img: "https://dummyimage.com/350x150/5a2b7a/fff"},
      {id: '6', img: "https://dummyimage.com/350x150/4a2b7a/fff"}
    ];

}
