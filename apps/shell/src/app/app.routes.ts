import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfa',
    loadChildren: () => import('mfa/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcome,
  },
];
