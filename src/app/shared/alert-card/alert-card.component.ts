import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-alert-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertCardComponent implements OnInit {
  private readonly _uuidService = inject(UniqueIdService);

  public uuid!: string;

  @Input({ required: true })
  public message!: string;

  public ngOnInit(): void {
    this.uuid = this._uuidService.generateUniqueIdWithPrefix('alert-card');
  }
}
