import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item10Page } from './item10.page';

const routes: Routes = [
  {
    path: '',
    component: Item10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item10PageRoutingModule {}
