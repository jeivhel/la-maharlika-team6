import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item9PageRoutingModule } from './item9-routing.module';

import { Item9Page } from './item9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item9PageRoutingModule
  ],
  declarations: [Item9Page]
})
export class Item9PageModule {}
