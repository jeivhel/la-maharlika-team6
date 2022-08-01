import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item8PageRoutingModule } from './item8-routing.module';

import { Item8Page } from './item8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item8PageRoutingModule
  ],
  declarations: [Item8Page]
})
export class Item8PageModule {}
