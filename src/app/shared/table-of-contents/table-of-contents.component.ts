import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import type { CategorySupport } from 'src/app/types/support/category-support';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [NgFor, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContentsComponent {
  @Input({ required: true })
  public headerText!: string;

  @Input({ required: true })
  public categories!: Array<CategorySupport>;
}
