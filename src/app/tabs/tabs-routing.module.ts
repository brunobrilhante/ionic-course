import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'intro',
        loadChildren: () => import('../intro/intro.module').then( m => m.IntroPageModule)
      },
      {
        path: '',
        redirectTo: '../intro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '../intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
