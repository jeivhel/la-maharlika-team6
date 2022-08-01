import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item11PageRoutingModule } from './item11-routing.module';

import { Item11Page } from './item11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item11PageRoutingModule
  ],
  declarations: [Item11Page]
})
export class Item11PageModule {}
