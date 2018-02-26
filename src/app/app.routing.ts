import { MyinfoHomeComponent } from './myinfo/myinfo-home/myinfo-home.component';
import { ShoppingHomeComponent } from './shopping/shopping-home/shopping-home.component';
import { InformationHomeComponent } from './information/information-home/information-home.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CommunityHomeComponent } from './community/community-home/community-home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    {
      path: '', component: HomeComponent,
    },
    { path: 'home', component: HomeComponent },
        { path: 'information', component: InformationHomeComponent },
        { path: 'shopping', component: ShoppingHomeComponent },
        { path: 'myinfo', component: MyinfoHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
