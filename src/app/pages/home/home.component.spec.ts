import { HttpClientTestingModule } from '@angular/common/http/testing';
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import HomeComponent from './home.component';

describe('SignUpPageComponent', () => {
  let component: HomeComponent | null = null;
  let fixture: ComponentFixture<HomeComponent> | null = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
