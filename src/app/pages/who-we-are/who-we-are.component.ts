import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WhoWeAreComponent {}
