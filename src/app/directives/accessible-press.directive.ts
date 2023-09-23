import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAccessiblePress]',
  standalone: true,
})
export class AccessiblePressDirective {
  @Output() public appAccessiblePress = new EventEmitter<KeyboardEvent | MouseEvent>();
  @HostListener('keydown', ['$event'])
  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.appAccessiblePress.emit(event);
    }
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    this.appAccessiblePress.emit(event);
  }
}
