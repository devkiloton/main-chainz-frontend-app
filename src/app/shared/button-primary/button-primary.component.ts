import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { map, startWith, Subject } from 'rxjs';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, AsyncPipe],
})
export class ButtonPrimaryComponent {
  // Properties
  @Output()
  public clicked = new EventEmitter<MouseEvent | Event>();

  @Input({ required: true })
  public label = '';

  @Input({ required: true })
  public title = '';

  @Input({ required: true })
  public type = '';

  @Input()
  public color = 'primary';

  @Input()
  public set disabled(isDisabled: boolean) {
    this._isDisabled$.next(isDisabled);
  }

  // Reactive properties
  public _isDisabled$ = new Subject<boolean>();
  public isDisabled$ = this._isDisabled$.asObservable().pipe(
    map(value => (value ? true : null)),
    startWith(null),
  );

  /**
   * Emits the click or Tab/Space key down event to the parent component.
   * @param event - The event that triggered the click or Tab/Space key down.
   * @returns void
   */
  public click(event: MouseEvent | Event): void {
    this.clicked.emit(event);
  }
}
