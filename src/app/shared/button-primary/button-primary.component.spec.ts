/* eslint-disable max-lines-per-function */
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { skip } from 'rxjs';
import { ButtonPrimaryComponent } from './button-primary.component';

describe('ButtonPrimaryComponent', () => {
  let component: ButtonPrimaryComponent | null = null;
  let fixture: ComponentFixture<ButtonPrimaryComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonPrimaryComponent, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(ButtonPrimaryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture?.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`(DOM) Button element should have as title (@Input() title)`, () => {
    if (!component || !fixture) {
      return;
    }
    const title = 'Test title';
    component.title = title;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('button') as HTMLElement | null;
    expect(compiled?.textContent).toContain(title);
  });

  it(`(DOM) Button element should have as type (@Input() type)`, () => {
    if (!component || !fixture) {
      return;
    }
    const type = 'button';
    component.type = type;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('button') as HTMLInputElement | null;
    expect(compiled?.type).toContain(type);
  });

  it(`(DOM) Button element should have as aria-label (@Input() label)`, () => {
    if (!component || !fixture) {
      return;
    }
    const label = 'label';
    component.label = label;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement.querySelector('button') as HTMLInputElement | null;
    expect(compiled?.getAttribute('aria-label')).toContain(label);
  });

  it(`set #disabled should make "isDisabled$" emit true when called passing true as argument`, done => {
    if (!component || !fixture) {
      return;
    }
    fixture.detectChanges();

    component.isDisabled$.pipe(skip(1)).subscribe(isDisabled => {
      expect(isDisabled).toBeTrue();
      done();
    });

    component.disabled = true;
  });

  it(`set #disabled should make "isDisabled$" emit null when called passing false as argument`, done => {
    if (!component || !fixture) {
      return;
    }
    fixture.detectChanges();

    component.isDisabled$.pipe(skip(1)).subscribe(isDisabled => {
      expect(isDisabled).toBeFalse();
      done();
    });

    component.disabled = false;
  });

  it(`(DOM) #${ButtonPrimaryComponent.prototype.click.name} should trigger (@Output() clicked) event when button clicked`, () => {
    if (!component || !fixture) {
      return;
    }
    const spy = spyOn(component.clicked, 'emit');
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
