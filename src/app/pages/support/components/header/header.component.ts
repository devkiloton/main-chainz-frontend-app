import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextComponent } from 'src/app/shared/input-text/input-text.component';
import { CardCategoryComponent } from '../card-category/card-category.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextComponent, CardCategoryComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
