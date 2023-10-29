import type { OptionNode } from 'src/app/types/option-node';

export const treeData: Array<OptionNode> = [
  {
    name: $localize`Buy crypto` as string,
    icon: 'shopping_cart',
    isDisabled: true,
  },
  {
    name: $localize`Trade anonymously` as string,
    children: [
      { name: $localize`P2P pure` as string, icon: 'group', isDisabled: true },
      { name: $localize`P2P with guarantee` as string, icon: 'diversity_3', isDisabled: true },
      { name: $localize`Buy without KYC` as string, icon: 'lock', isDisabled: true },
      { name: $localize`Ghost account` as string, icon: 'air', isDisabled: true },
      {
        name: $localize`Tor and IPFS` as string,
        icon: 'decentralized_protocols',
        isSvg: true,
        isDisabled: false,
        route: 'decentralized-protocols',
      },
    ],
    isDisabled: false,
  },
  {
    name: $localize`About us` as string,
    children: [
      { name: $localize`Who we are?` as string, icon: 'que', isDisabled: true },
      { name: $localize`Our mission` as string, icon: 'public', isDisabled: true },
      { name: $localize`Blog` as string, icon: 'description', isDisabled: true },
    ],
    isDisabled: false,
  },
  {
    name: $localize`Support` as string,
    icon: 'support_agent',
    isDisabled: false,
    route: 'support',
  },
  {
    name: $localize`Markets` as string,
    icon: 'show_chart',
    isDisabled: true,
  },
  {
    name: $localize`Affiliate` as string,
    icon: 'hub',
    isDisabled: true,
  },
  {
    name: $localize`API` as string,
    icon: 'api',
    isDisabled: true,
  },
  {
    name: $localize`Legal` as string,
    children: [
      { name: $localize`Terms of use` as string, icon: 'gavel', isDisabled: true },
      { name: $localize`Privacy policy` as string, icon: 'policy', isDisabled: true },
    ],
    isDisabled: false,
  },
];
