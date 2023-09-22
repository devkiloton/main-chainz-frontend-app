import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-transfer.component.html',
  styleUrls: ['./check-transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CheckTransferComponent {

}
