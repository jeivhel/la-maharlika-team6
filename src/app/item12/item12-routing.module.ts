import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item12Page } from './item12.page';

const routes: Routes = [
  {
    path: '',
    component: Item12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item12PageRoutingModule {}
