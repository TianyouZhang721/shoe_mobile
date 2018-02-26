import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingHomeComponent } from './shopping-home/shopping-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingHomeComponent
  ],
  declarations: [ShoppingHomeComponent]
})
export class ShoppingModule { }
