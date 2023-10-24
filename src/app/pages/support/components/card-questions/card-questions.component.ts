import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-questions',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card-questions.component.html',
  styleUrls: ['./card-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardQuestionsComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public icon!: string;
}
