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
    title: $localize`Central Hash | Decentralized protocols` as string,
    path: 'decentralized-protocols',
    pathMatch: 'full',
    loadComponent: () => import('./pages/decentralized-protocols/decentralized-protocols.component'),
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
    path: '**',
    redirectTo: 'home',
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
