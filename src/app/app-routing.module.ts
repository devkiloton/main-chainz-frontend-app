import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { authorizationGuard } from './guards/authorization-guard/authorization.guard';

const routes: Routes = [
  {
    title: $localize`Central Hash` as string,
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    title: $localize`Central Hash | Home` as string,
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    title: $localize`Central Hash | Support` as string,
    path: 'support',
    children: [
      {
        title: $localize`Central Hash | Support` as string,
        path: '',
        loadComponent: () => import('./pages/support/support.component'),
      },
      {
        title: $localize`Central Hash | Support` as string,
        path: ':category',
        loadComponent: () => import('./pages/support/children/category/category.component'),
      },
      {
        title: $localize`Central Hash | Support` as string,
        path: ':category/:article',
        loadComponent: () => import('./pages/support/children/article/article.component'),
      },
    ],
  },
  {
    title: $localize`Central Hash | Dashboard` as string,
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [authorizationGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
  },
  {
    title: $localize`Central Hash | Sign in` as string,
    path: 'sign-in',
    pathMatch: 'full',
    loadComponent: () => import('./pages/sign-in/sign-in.component'),
  },
  {
    title: $localize`Central Hash | Sign up` as string,
    path: 'sign-up',
    pathMatch: 'full',
    loadComponent: () => import('./pages/sign-up/sign-up.component'),
  },
  {
    title: $localize`Central Hash | Not found` as string,
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
