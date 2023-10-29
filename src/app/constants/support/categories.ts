import { Category } from 'projects/central-hash-api-client/src/lib/models/articles/enum/category';
import type { CategorySupport } from 'src/app/types/support/category-support';

export const supportCategories: Array<CategorySupport> = [
  {
    title: $localize`My account` as string,
    icon: 'account_circle',
    id: Category.my_account,
  },
  {
    title: $localize`Deposit and withdrawal` as string,
    icon: 'payments',
    id: Category.deposit_and_withdrawal,
  },
  {
    title: $localize`Security` as string,
    icon: 'lock',
    id: Category.security,
  },
  {
    title: $localize`Anonimity` as string,
    icon: 'question_mark',
    id: Category.anonimity,
  },
  {
    title: $localize`P2P` as string,
    icon: 'group',
    id: Category.p2p,
  },
  {
    title: $localize`Policies` as string,
    icon: 'policy',
    id: Category.policies,
  },
  {
    title: $localize`Transfer crypto` as string,
    icon: 'sync_alt',
    id: Category.transfer_crypto,
  },
  {
    title: $localize`Contact` as string,
    icon: 'call',
    id: Category.contact,
  },
  {
    title: $localize`Buy and sell` as string,
    icon: 'currency_bitcoin',
    id: Category.buy_and_sell,
  },
  {
    title: $localize`Getting started` as string,
    icon: 'map',
    id: Category.getting_started,
  },
  {
    title: $localize`Trading` as string,
    icon: 'rocket',
    id: Category.trading,
  },
  {
    title: $localize`Terms` as string,
    icon: 'gavel',
    id: Category.terms,
  },
];
