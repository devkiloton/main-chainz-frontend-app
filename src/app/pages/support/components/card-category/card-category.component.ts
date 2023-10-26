import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCategoryComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public icon!: string;

  @Input({ required: true })
  public route!: string;
}
