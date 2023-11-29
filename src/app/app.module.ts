import { NgIf } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UniversalAppInterceptor } from './interceptors/universal-interceptor/universal-app.interceptor';
import { ButtonContactComponent } from './shared/button-contact/button-contact.component';
import { CarouselPricesComponent } from './shared/carousel-prices/carousel-prices.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    ToolBarComponent,
    FooterComponent,
    CarouselPricesComponent,
    SidenavComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ButtonContactComponent,
    NgIf,
  ],
  providers: [provideClientHydration(), { provide: HTTP_INTERCEPTORS, useClass: UniversalAppInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
