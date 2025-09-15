import { Routes } from '@angular/router';
import { WipPage } from './core/wip/pages/wip-page/wip-page';

export const routes: Routes = [
  {
    path: '',
    component: WipPage,
    title: 'Work in progress',
  },
];
