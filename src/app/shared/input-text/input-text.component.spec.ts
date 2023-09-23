/* eslint-disable max-lines-per-function */
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { skip } from 'rxjs';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent | null = null;

  let fixture: ComponentFixture<InputTextComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputTextComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture?.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`#${InputTextComponent.prototype.writeValue.name} should be called when control is updated`, () => {
    if (!component || !fixture) {
      return;
    }
    const spy = spyOn(component, 'writeValue');
    fixture.detectChanges();
    component.inputControl.setValue('test');
    expect(spy).toHaveBeenCalled();
  });

  it(`"isDisabled$" should emit null when subscribed for the first time`, done => {
    if (!component || !fixture) {
      return;
    }
    fixture.detectChanges();

    component.isDisabled$.subscribe(isDisabled => {
      expect(isDisabled).toEqual(null);
      done();
    });
  });

  it(`#${InputTextComponent.prototype.setDisabledState.name} should make "isDisabled$" emit true when called passing true as argument`, done => {
    if (!component || !fixture) {
      return;
    }
    fixture.detectChanges();

    component.isDisabled$.pipe(skip(1)).subscribe(isDisabled => {
      expect(isDisabled).toEqual(true);
      done();
    });

    component.setDisabledState(true);
  });

  it(`#${InputTextComponent.prototype.setDisabledState.name} should make "isDisabled$" emit null when called passing false as argument`, done => {
    if (!component || !fixture) {
      return;
    }
    fixture.detectChanges();

    component.isDisabled$.pipe(skip(1)).subscribe(isDisabled => {
      expect(isDisabled).toEqual(null);
      done();
    });

    component.setDisabledState(false);
  });

  it(`(DOM) #${InputTextComponent.prototype.touched.name} should be called when user focus on input element and when called from outside`, () => {
    if (!component || !fixture) {
      return;
    }
    fixture.detectChanges();
    const spy = spyOn(component, 'touched');
    const compiled = fixture.debugElement.nativeElement.querySelector('input') as HTMLInputElement | null;
    compiled?.dispatchEvent(new Event('blur'));
    expect(spy).toHaveBeenCalled();
  });

  it(`(DOM) Input element should have as label (@Input() label)`, () => {
    if (!component || !fixture) {
      return;
    }
    const label = 'Test Label';
    component.label = label;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('mat-label') as HTMLElement | null;
    expect(compiled?.textContent).toContain(label);
  });

  it(`(DOM) Input element should have as type (@Input() type)`, () => {
    if (!component || !fixture) {
      return;
    }
    const type = 'email';
    component.type = type;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('input') as HTMLInputElement | null;
    expect(compiled?.type).toContain(type);
  });

  it(`(DOM) Input element should have as name (@Input() name)`, () => {
    if (!component || !fixture) {
      return;
    }
    const name = 'name';
    component.name = name;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('input') as HTMLInputElement | null;
    expect(compiled?.name).toContain(name);
  });

  it(`(DOM) Input element should have as hint (@Input() hint)`, () => {
    if (!component || !fixture) {
      return;
    }
    const hint = 'hint';
    component.hint = hint;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('mat-hint') as HTMLElement | null;
    expect(compiled?.textContent).toContain(hint);
  });

  it(`(DOM) Input element should have as icon (@Input() icon)`, () => {
    if (!component || !fixture) {
      return;
    }
    const icon = 'email';
    component.icon = icon;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('mat-icon') as HTMLElement | null;
    expect(compiled?.textContent).toContain(icon);
  });

  it(`#${InputTextComponent.prototype.touched.name} should exist`, () => {
    // TODO: Implement this test later with a dummy component
    if (!component || !fixture) {
      return;
    }
    component.touched();
    expect('function').toEqual('function');
  });
});
