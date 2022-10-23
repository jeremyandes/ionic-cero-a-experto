import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../segment/segment.module').then(m => m.SegmentPageModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('../grid/grid.module').then(m => m.GridPageModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../refresher/refresher.module').then(m => m.RefresherPageModule),
      },
      { path: '', redirectTo: 'account', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
