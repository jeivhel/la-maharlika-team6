import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item4PageRoutingModule } from './item4-routing.module';

import { Item4Page } from './item4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item4PageRoutingModule
  ],
  declarations: [Item4Page]
})
export class Item4PageModule {}
