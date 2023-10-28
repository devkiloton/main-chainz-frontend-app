import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-decentralized-protocols',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decentralized-protocols.component.html',
  styleUrls: ['./decentralized-protocols.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DecentralizedProtocolsComponent {}
