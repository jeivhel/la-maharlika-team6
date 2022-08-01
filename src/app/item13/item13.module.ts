import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item13PageRoutingModule } from './item13-routing.module';

import { Item13Page } from './item13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item13PageRoutingModule
  ],
  declarations: [Item13Page]
})
export class Item13PageModule {}
