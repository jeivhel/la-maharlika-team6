import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item11Page } from './item11.page';

const routes: Routes = [
  {
    path: '',
    component: Item11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item11PageRoutingModule {}
