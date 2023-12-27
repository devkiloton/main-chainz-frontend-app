import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import type { Article } from 'projects/main-chainz-api-client/src/lib/models/articles/article';
import { isCategorySupport } from 'src/app/type-guards/is-category-support';
import type { CategorySupport } from 'src/app/types/support/category-support';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule, MatButtonModule],
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContentsComponent {
  private readonly _router = inject(Router);

  @Input({ required: true })
  public headerText!: string;

  @Input({ required: true })
  public contents!: Array<CategorySupport | Article>;

  public readonly isCategorySupport = isCategorySupport;

  public iconCategorySupport(data: CategorySupport | Article): string | null {
    if (this.isCategorySupport(data)) {
      return data.icon;
    }
    return null;
  }

  public defineRoute(data: CategorySupport | Article): void {
    if (this.isCategorySupport(data)) {
      this._router.navigate([`/support/${data.id}`]);
    } else {
      this._router.navigate([`/support/${data.category}/${data.id}`]);
    }
  }
}
