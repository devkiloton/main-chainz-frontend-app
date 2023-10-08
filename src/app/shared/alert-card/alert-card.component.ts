import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertCardComponent {
  @Input({ required: true })
  public message!: string;
}
