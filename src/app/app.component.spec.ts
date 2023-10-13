import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CarouselPricesComponent } from './shared/carousel-prices/carousel-prices.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToolBarComponent, FooterComponent, CarouselPricesComponent],
      declarations: [AppComponent],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
