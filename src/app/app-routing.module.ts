import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'item1',
    loadChildren: () => import('./item1/item1.module').then( m => m.Item1PageModule)
  },
  {
    path: 'item2',
    loadChildren: () => import('./item2/item2.module').then( m => m.Item2PageModule)
  },
  {
    path: 'item3',
    loadChildren: () => import('./item3/item3.module').then( m => m.Item3PageModule)
  },
  {
    path: 'item4',
    loadChildren: () => import('./item4/item4.module').then( m => m.Item4PageModule)
  },
  {
    path: 'item5',
    loadChildren: () => import('./item5/item5.module').then( m => m.Item5PageModule)
  },
  {
    path: 'item6',
    loadChildren: () => import('./item6/item6.module').then( m => m.Item6PageModule)
  },
  {
    path: 'item7',
    loadChildren: () => import('./item7/item7.module').then( m => m.Item7PageModule)
  },
  {
    path: 'item8',
    loadChildren: () => import('./item8/item8.module').then( m => m.Item8PageModule)
  },
  {
    path: 'item9',
    loadChildren: () => import('./item9/item9.module').then( m => m.Item9PageModule)
  },
  {
    path: 'item10',
    loadChildren: () => import('./item10/item10.module').then( m => m.Item10PageModule)
  },
  {
    path: 'item11',
    loadChildren: () => import('./item11/item11.module').then( m => m.Item11PageModule)
  },
  {
    path: 'item12',
    loadChildren: () => import('./item12/item12.module').then( m => m.Item12PageModule)
  },
  {
    path: 'item13',
    loadChildren: () => import('./item13/item13.module').then( m => m.Item13PageModule)
  },
  {
    path: 'item14',
    loadChildren: () => import('./item14/item14.module').then( m => m.Item14PageModule)
  },
  {
    path: 'item15',
    loadChildren: () => import('./item15/item15.module').then( m => m.Item15PageModule)
  },
  {
    path: 'item16',
    loadChildren: () => import('./item16/item16.module').then( m => m.Item16PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
