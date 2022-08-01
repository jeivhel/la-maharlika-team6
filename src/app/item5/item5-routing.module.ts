import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item5Page } from './item5.page';

const routes: Routes = [
  {
    path: '',
    component: Item5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item5PageRoutingModule {}
