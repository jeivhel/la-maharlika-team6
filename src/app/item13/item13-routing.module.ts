import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item13Page } from './item13.page';

const routes: Routes = [
  {
    path: '',
    component: Item13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item13PageRoutingModule {}
