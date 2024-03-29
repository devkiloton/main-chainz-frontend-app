import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { authorizationGuard } from './guards/authorization-guard/authorization.guard';

const routes: Routes = [
  {
    title: $localize`Main Chainz` as string,
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    title: $localize`Main Chainz | Home` as string,
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    title: $localize`Main Chainz | Decentralized protocols` as string,
    path: 'decentralized-protocols',
    pathMatch: 'full',
    loadComponent: () => import('./pages/decentralized-protocols/decentralized-protocols.component'),
  },
  {
    title: $localize`Main Chainz | Support` as string,
    path: 'support',
    children: [
      {
        title: $localize`Main Chainz | Support` as string,
        path: '',
        loadComponent: () => import('./pages/support/support.component'),
      },
      {
        title: $localize`Main Chainz | Support` as string,
        path: ':category',
        loadComponent: () => import('./pages/support/children/category/category.component'),
      },
      {
        title: $localize`Main Chainz | Support` as string,
        path: ':category/:article',
        loadComponent: () => import('./pages/support/children/article/article.component'),
      },
    ],
  },
  {
    title: $localize`Main Chainz | Who we are?` as string,
    path: 'who-we-are',
    pathMatch: 'full',
    loadComponent: () => import('./pages/who-we-are/who-we-are.component'),
  },
  {
    title: $localize`Main Chainz | Dashboard` as string,
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [authorizationGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
  },
  {
    title: $localize`Main Chainz | Sign in` as string,
    path: 'sign-in',
    pathMatch: 'full',
    loadComponent: () => import('./pages/sign-in/sign-in.component'),
  },
  {
    title: $localize`Main Chainz | Sign up` as string,
    path: 'sign-up',
    pathMatch: 'full',
    loadComponent: () => import('./pages/sign-up/sign-up.component'),
  },
  {
    title: $localize`Main Chainz | Not found` as string,
    path: 'not-found',
    pathMatch: 'full',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
