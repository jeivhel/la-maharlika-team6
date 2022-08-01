import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item8Page } from './item8.page';

const routes: Routes = [
  {
    path: '',
    component: Item8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item8PageRoutingModule {}
