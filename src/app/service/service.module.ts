import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexService } from './index.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    IndexService
  ]
})
export class ServiceModule { }
