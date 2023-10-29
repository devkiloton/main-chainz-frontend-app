import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-decentralized-protocols',
  standalone: true,
  imports: [MatDividerModule, RouterModule],
  templateUrl: './decentralized-protocols.component.html',
  styleUrls: ['./decentralized-protocols.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DecentralizedProtocolsComponent {}
