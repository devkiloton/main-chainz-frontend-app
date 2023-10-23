import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { isNotNil } from 'ramda';
import { treeData } from 'src/app/constants/shared/tree-data';
import type { OptionNode } from 'src/app/types/option-node';

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
    this.dataSource.data = treeData;
  }

  public hasChild = (_number: number, node: OptionNode): boolean =>
    Boolean(node.children) && isNotNil(node.children) && node.children.length > 0;
}
