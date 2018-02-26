import { MyinfoModule } from './myinfo/myinfo.module';
import { ShoppingModule } from './shopping/shopping.module';
// import { HomeComponent } from './home/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRoutingModule } from './app.routing';

import { RouterModule } from '@angular/router';
import { SwiperModule } from 'angular2-useful-swiper';
import { ServiceModule } from './service/service.module';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { InformationModule } from './information/information.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    SwiperModule,
    ServiceModule,
    HomeModule,
    MyinfoModule,
    ShoppingModule,
    InformationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
