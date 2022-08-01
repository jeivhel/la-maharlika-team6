import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item9Page } from './item9.page';

const routes: Routes = [
  {
    path: '',
    component: Item9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item9PageRoutingModule {}
