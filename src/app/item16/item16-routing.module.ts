import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item16Page } from './item16.page';

const routes: Routes = [
  {
    path: '',
    component: Item16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item16PageRoutingModule {}
