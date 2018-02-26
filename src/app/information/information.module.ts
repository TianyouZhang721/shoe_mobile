import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationHomeComponent } from './information-home/information-home.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports: [
    InformationHomeComponent
  ],
  declarations: [InformationHomeComponent]
})
export class InformationModule { }
