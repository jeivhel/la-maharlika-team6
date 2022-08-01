import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item15PageRoutingModule } from './item15-routing.module';

import { Item15Page } from './item15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item15PageRoutingModule
  ],
  declarations: [Item15Page]
})
export class Item15PageModule {}
