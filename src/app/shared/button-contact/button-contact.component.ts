import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-contact',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-contact.component.html',
  styleUrls: ['./button-contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonContactComponent {}
