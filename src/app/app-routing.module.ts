import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

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
    title: $localize`Central Hash | Create wallet` as string,
    path: 'create-wallet',
    pathMatch: 'full',
    loadComponent: () => import('./pages/create-wallet/create-wallet.component'),
  },
  {
    title: $localize`Central Hash | Check wallet` as string,
    path: 'check-wallet',
    pathMatch: 'full',
    loadComponent: () => import('./pages/check-wallet/check-wallet.component'),
  },
  {
    title: $localize`Central Hash | Create transfer` as string,
    path: 'create-transfer',
    pathMatch: 'full',
    loadComponent: () => import('./pages/create-transfer/create-transfer.component'),
  },
  {
    title: $localize`Central Hash | Check transfer` as string,
    path: 'check-transfer',
    pathMatch: 'full',
    loadComponent: () => import('./pages/check-transfer/check-transfer.component'),
  },
  {
    title: $localize`Central Hash | Check transaction fee` as string,
    path: 'check-transaction-fee',
    pathMatch: 'full',
    loadComponent: () => import('./pages/check-transaction-fee/check-transaction-fee.component'),
  },
  {
    title: $localize`Central Hash | Check transaction history` as string,
    path: 'check-transaction-history',
    pathMatch: 'full',
    loadComponent: () => import('./pages/check-transaction-history/check-transaction-history.component'),
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
