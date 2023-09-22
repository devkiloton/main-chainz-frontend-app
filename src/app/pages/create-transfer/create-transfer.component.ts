import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CreateTransferComponent {

}
