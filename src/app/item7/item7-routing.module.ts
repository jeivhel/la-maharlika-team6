import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item7Page } from './item7.page';

const routes: Routes = [
  {
    path: '',
    component: Item7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item7PageRoutingModule {}
