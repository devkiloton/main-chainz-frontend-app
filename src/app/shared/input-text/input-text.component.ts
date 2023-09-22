import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, inject, Input } from '@angular/core';
import {
  type ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { map, startWith, Subject } from 'rxjs';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-input-text',
  standalone: true,
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, AsyncPipe, ReactiveFormsModule, NgIf],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  // Dependency Injection
  private readonly _uniqueIdService = inject(UniqueIdService);
  private readonly _nonNullableFormBuilder = inject(NonNullableFormBuilder);

  // Reactive properties
  public _isDisabled$ = new Subject<boolean>();
  public isDisabled$ = this._isDisabled$.asObservable().pipe(
    map(value => (value ? true : null)),
    startWith(null),
  );

  // Properties
  @Input({ required: true })
  public label = '';

  @Input({ required: true })
  public type = '';

  @Input()
  public hint = '';

  public readonly id = this._uniqueIdService.generateUniqueIdWithPrefix('app-input-text');

  public readonly inputControl = this._nonNullableFormBuilder.control('');

  /**
   * Icons provided by Material Design.
   * Table of codes: https://jossef.github.io/material-design-icons-iconfont/
   */
  @Input()
  public icon = '';

  // ControlValueAccessor Implementation
  private _onChange = (_value: string): void => void 0;

  private _onTouched = (): void => void 0;

  public writeValue(value: string): void {
    this._onChange(value);
  }

  public registerOnChange(fn: (_value: string) => void): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._isDisabled$.next(isDisabled);
  }

  // Methods
  public touched(): void {
    this._onTouched();
  }
}
