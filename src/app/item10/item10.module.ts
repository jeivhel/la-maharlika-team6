import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item10PageRoutingModule } from './item10-routing.module';

import { Item10Page } from './item10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item10PageRoutingModule
  ],
  declarations: [Item10Page]
})
export class Item10PageModule {}
