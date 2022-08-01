import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item12PageRoutingModule } from './item12-routing.module';

import { Item12Page } from './item12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item12PageRoutingModule
  ],
  declarations: [Item12Page]
})
export class Item12PageModule {}
