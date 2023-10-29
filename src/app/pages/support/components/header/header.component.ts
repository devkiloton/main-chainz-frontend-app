import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShapeBehindDirective } from 'src/app/directives/shape-behind/shape-behind.directive';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextComponent, ShapeBehindDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
