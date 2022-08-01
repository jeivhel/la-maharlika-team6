import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item14Page } from './item14.page';

const routes: Routes = [
  {
    path: '',
    component: Item14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item14PageRoutingModule {}
