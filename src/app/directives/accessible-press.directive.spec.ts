import { Component, Input } from '@angular/core';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { AccessiblePressDirective } from './accessible-press.directive';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [AccessiblePressDirective],
  template: `<a (appAccessiblePress)="onClick()">Calling the directive</a>`,
})
export class DummyComponent {
  @Input()
  public email = '';

  public onClick(): void {
    console.log('TEST_LOG_IGNORE: Called');
  }
}

describe('AccessiblePressDirective', () => {
  let component: DummyComponent | null = null;
  let fixture: ComponentFixture<DummyComponent> | null = null;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [DummyComponent],
    });
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
  });
  it('should create an instance', () => {
    const directive = new AccessiblePressDirective();
    expect(directive).toBeTruthy();
  });

  it(`${DummyComponent.prototype.onClick.name} should be called when button with "appAccessiblePress" directive clicked`, () => {
    if (component === null) {
      return;
    }
    spyOn(component, 'onClick');
    const button = fixture?.debugElement.nativeElement.querySelector('a') as HTMLAnchorElement;
    button.click();
    fixture?.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
  });

  it(`${DummyComponent.prototype.onClick.name} should be called when button with "appAccessiblePress" directive pressed with space key`, () => {
    if (component === null) {
      return;
    }
    spyOn(component, 'onClick');
    const button = fixture?.debugElement.nativeElement.querySelector('a') as HTMLAnchorElement;
    button.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    fixture?.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
  });

  it(`${DummyComponent.prototype.onClick.name} should be called when button with "appAccessiblePress" directive pressed with enter key`, () => {
    if (component === null) {
      return;
    }
    spyOn(component, 'onClick');
    const button = fixture?.debugElement.nativeElement.querySelector('a') as HTMLAnchorElement;
    button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    fixture?.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
  });
});
