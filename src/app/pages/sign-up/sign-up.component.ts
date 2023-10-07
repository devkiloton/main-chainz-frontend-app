import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@Component({
  standalone: true,
  imports: [SignUpFormComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignUpComponent {}
