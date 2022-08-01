import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item7PageRoutingModule } from './item7-routing.module';

import { Item7Page } from './item7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item7PageRoutingModule
  ],
  declarations: [Item7Page]
})
export class Item7PageModule {}
