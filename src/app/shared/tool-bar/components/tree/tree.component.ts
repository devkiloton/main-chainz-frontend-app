import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { isNotNil } from 'ramda';

type OptionNode = {
  name: string;
  children?: Array<OptionNode>;
  icon?: string;
};

const TREE_DATA: Array<OptionNode> = [
  {
    name: 'Buy crypto',
    icon: 'shopping_cart',
  },
  {
    name: 'Trade anonymously',
    children: [
      { name: 'P2P pure', icon: 'group' },
      { name: 'P2P with guarantee', icon: 'diversity_3' },
      { name: 'Buy without KYC', icon: 'lock' },
      { name: 'Ghost account', icon: 'air' },
    ],
  },
  {
    name: 'About us',
    children: [
      { name: 'Who we are?', icon: 'question_mark' },
      { name: 'Our mission', icon: 'public' },
      { name: 'Blog', icon: 'description' },
    ],
  },
  {
    name: 'Support',
    icon: 'support_agent',
  },
  {
    name: 'Markets',
    icon: 'show_chart',
  },
  {
    name: 'Affiliate',
    icon: 'hub',
  },
  {
    name: 'API',
    icon: 'api',
  },
  {
    name: 'Legal',
    children: [
      { name: 'Terms of use', icon: 'gavel' },
      { name: 'Privacy policy', icon: 'policy' },
    ],
  },
];

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatRippleModule],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  public treeControl = new NestedTreeControl<OptionNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<OptionNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  public hasChild = (_number: number, node: OptionNode): boolean =>
    Boolean(node.children) && isNotNil(node.children) && node.children.length > 0;
}
