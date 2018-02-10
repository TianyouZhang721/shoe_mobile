import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'angular2-useful-swiper';
@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    SwiperModule,
  ],
  declarations: []
})
export class ShareModule { }
