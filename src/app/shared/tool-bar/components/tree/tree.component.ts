import { NestedTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { isNil } from 'lodash-es';
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
  private readonly _route = inject(Router);
  public treeControl = new NestedTreeControl<OptionNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<OptionNode>();

  constructor() {
    this.dataSource.data = treeData;
  }

  public hasChild = (_number: number, node: OptionNode): boolean =>
    Boolean(node.children) && isNotNil(node.children) && node.children.length > 0;

  public changeRoute(route: string | undefined): void {
    if (isNil(route)) {
      return;
    }

    this._route.navigate([route]);
  }
}
