import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
