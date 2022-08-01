import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item14PageRoutingModule } from './item14-routing.module';

import { Item14Page } from './item14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item14PageRoutingModule
  ],
  declarations: [Item14Page]
})
export class Item14PageModule {}
