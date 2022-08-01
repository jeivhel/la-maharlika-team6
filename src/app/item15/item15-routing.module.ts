import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item15Page } from './item15.page';

const routes: Routes = [
  {
    path: '',
    component: Item15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item15PageRoutingModule {}
