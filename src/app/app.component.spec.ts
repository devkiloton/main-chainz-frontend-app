import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ButtonContactComponent } from './shared/button-contact/button-contact.component';
import { CarouselPricesComponent } from './shared/carousel-prices/carousel-prices.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToolBarComponent,
        FooterComponent,
        CarouselPricesComponent,
        HttpClientTestingModule,
        SidenavComponent,
        BrowserAnimationsModule,
        ButtonContactComponent,
      ],
      declarations: [AppComponent],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
