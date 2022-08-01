import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item6PageRoutingModule } from './item6-routing.module';

import { Item6Page } from './item6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item6PageRoutingModule
  ],
  declarations: [Item6Page]
})
export class Item6PageModule {}
