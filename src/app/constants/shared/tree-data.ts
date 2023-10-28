import type { OptionNode } from 'src/app/types/option-node';

export const treeData: Array<OptionNode> = [
  {
    name: $localize`Buy crypto` as string,
    icon: $localize`shopping_cart` as string,
    isDisabled: true,
  },
  {
    name: $localize`Trade anonymously` as string,
    children: [
      { name: $localize`P2P pure` as string, icon: $localize`group` as string, isDisabled: true },
      { name: $localize`P2P with guarantee` as string, icon: $localize`diversity_3` as string, isDisabled: true },
      { name: $localize`Buy without KYC` as string, icon: $localize`lock` as string, isDisabled: true },
      { name: $localize`Ghost account` as string, icon: $localize`air` as string, isDisabled: true },
      {
        name: $localize`Tor and IPFS` as string,
        icon: $localize`decentralized_protocols` as string,
        isSvg: true,
        isDisabled: false,
      },
    ],
    isDisabled: false,
  },
  {
    name: $localize`About us` as string,
    children: [
      { name: $localize`Who we are?` as string, icon: $localize`question_mark` as string, isDisabled: true },
      { name: $localize`Our mission` as string, icon: $localize`public` as string, isDisabled: true },
      { name: $localize`Blog` as string, icon: $localize`description` as string, isDisabled: true },
    ],
    isDisabled: false,
  },
  {
    name: $localize`Support` as string,
    icon: $localize`support_agent` as string,
    isDisabled: false,
  },
  {
    name: $localize`Markets` as string,
    icon: $localize`show_chart` as string,
    isDisabled: true,
  },
  {
    name: $localize`Affiliate` as string,
    icon: $localize`hub` as string,
    isDisabled: true,
  },
  {
    name: $localize`API` as string,
    icon: $localize`api` as string,
    isDisabled: true,
  },
  {
    name: $localize`Legal` as string,
    children: [
      { name: $localize`Terms of use` as string, icon: $localize`gavel` as string, isDisabled: true },
      { name: $localize`Privacy policy` as string, icon: $localize`policy` as string, isDisabled: true },
    ],
    isDisabled: false,
  },
];
