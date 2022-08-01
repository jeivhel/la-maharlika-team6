import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item16PageRoutingModule } from './item16-routing.module';

import { Item16Page } from './item16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item16PageRoutingModule
  ],
  declarations: [Item16Page]
})
export class Item16PageModule {}
