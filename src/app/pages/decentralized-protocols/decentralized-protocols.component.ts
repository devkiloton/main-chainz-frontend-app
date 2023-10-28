import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-decentralized-protocols',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './decentralized-protocols.component.html',
  styleUrls: ['./decentralized-protocols.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DecentralizedProtocolsComponent {}
