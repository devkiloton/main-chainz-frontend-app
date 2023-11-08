import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShapeBehindDirective } from 'src/app/directives/shape-behind/shape-behind.directive';

@Component({
  standalone: true,
  imports: [ShapeBehindDirective],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WhoWeAreComponent {}
