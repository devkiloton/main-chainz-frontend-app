import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalConverterComponent } from './modal-converter.component';

describe('ModalConverterComponent', () => {
  let component: ModalConverterComponent | null = null;
  let fixture: ComponentFixture<ModalConverterComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalConverterComponent, HttpClientTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(ModalConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
