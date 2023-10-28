import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-questions',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card-questions.component.html',
  styleUrls: ['./card-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardQuestionsComponent {
  @Input({ required: true })
  public title!: string;

  @Input({ required: true })
  public id!: string;

  @Input({ required: true })
  public category!: string;
}
