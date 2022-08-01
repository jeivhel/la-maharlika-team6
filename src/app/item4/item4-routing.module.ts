import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item4Page } from './item4.page';

const routes: Routes = [
  {
    path: '',
    component: Item4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item4PageRoutingModule {}
