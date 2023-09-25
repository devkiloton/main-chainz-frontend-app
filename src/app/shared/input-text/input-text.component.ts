import { AsyncPipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  forwardRef,
  inject,
  Input,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  type ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject, map, shareReplay, startWith, Subject } from 'rxjs';
import { AccessiblePressDirective } from 'src/app/directives/accessible-press.directive';
import { UniqueIdService } from 'src/app/services/unique-id/unique-id.service';

@Component({
  selector: 'app-input-text',
  standalone: true,
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AsyncPipe,
    MatRippleModule,
    ReactiveFormsModule,
    NgIf,
    AccessiblePressDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  // Dependency Injection
  private readonly _uniqueIdService = inject(UniqueIdService);
  private readonly _nonNullableFormBuilder = inject(NonNullableFormBuilder);
  private readonly _destroyRef = inject(DestroyRef);

  // Reactive properties
  private readonly _isDisabled$ = new Subject<boolean>();
  public readonly isDisabled$ = this._isDisabled$.pipe(
    map(value => (value ? true : null)),
    startWith(null),
  );

  private readonly _name$ = new BehaviorSubject<string | null>(null);
  public readonly name$ = this._name$.pipe(shareReplay(1));

  // Properties
  @Output() public readonly pressInputButton = new EventEmitter<void>();
  @Input({ required: true })
  public label = '';

  @Input({ required: true })
  public type = '';

  @Input({ required: true })
  public name = '';

  @Input()
  public hint = '';

  @Input()
  public placeholder = '';

  /**
   * Icons provided by Material Design.
   * Table of codes: https://jossef.github.io/material-design-icons-iconfont/
   */
  @Input()
  public icon = '';

  public readonly id = this._uniqueIdService.generateUniqueIdWithPrefix('app-input-text');

  public readonly inputControl = this._nonNullableFormBuilder.control('');

  // Lyfe cycle hooks
  public ngOnInit(): void {
    this.inputControl.valueChanges
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(value => this.writeValue(value));
  }

  public onPressInputButton(): void {
    this.pressInputButton.emit();
  }

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
