import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-questions',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './card-questions.component.html',
  styleUrls: ['./card-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardQuestionsComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public icon!: string;

  @Input({ required: true })
  public route!: string;
}
