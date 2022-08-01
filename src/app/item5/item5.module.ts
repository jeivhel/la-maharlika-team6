import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item5PageRoutingModule } from './item5-routing.module';

import { Item5Page } from './item5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item5PageRoutingModule
  ],
  declarations: [Item5Page]
})
export class Item5PageModule {}
