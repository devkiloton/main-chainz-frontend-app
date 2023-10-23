import type { OptionNode } from 'src/app/types/option-node';

export const treeData: Array<OptionNode> = [
  {
    name: $localize`Buy crypto` as string,
    icon: $localize`shopping_cart` as string,
  },
  {
    name: $localize`Trade anonymously` as string,
    children: [
      { name: $localize`P2P pure` as string, icon: $localize`group` as string },
      { name: $localize`P2P with guarantee` as string, icon: $localize`diversity_3` as string },
      { name: $localize`Buy without KYC` as string, icon: $localize`lock` as string },
      { name: $localize`Ghost account` as string, icon: $localize`air` as string },
      { name: $localize`Tor and IPFS` as string, icon: $localize`decentralized_protocols` as string, isSvg: true },
    ],
  },
  {
    name: $localize`About us` as string,
    children: [
      { name: $localize`Who we are?` as string, icon: $localize`question_mark` as string },
      { name: $localize`Our mission` as string, icon: $localize`public` as string },
      { name: $localize`Blog` as string, icon: $localize`description` as string },
    ],
  },
  {
    name: $localize`Support` as string,
    icon: $localize`support_agent` as string,
  },
  {
    name: $localize`Markets` as string,
    icon: $localize`show_chart` as string,
  },
  {
    name: $localize`Affiliate` as string,
    icon: $localize`hub` as string,
  },
  {
    name: $localize`API` as string,
    icon: $localize`api` as string,
  },
  {
    name: $localize`Legal` as string,
    children: [
      { name: $localize`Terms of use` as string, icon: $localize`gavel` as string },
      { name: $localize`Privacy policy` as string, icon: $localize`policy` as string },
    ],
  },
];
