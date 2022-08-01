import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item6Page } from './item6.page';

const routes: Routes = [
  {
    path: '',
    component: Item6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item6PageRoutingModule {}
