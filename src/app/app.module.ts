import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UniversalAppInterceptor } from './interceptors/universal-interceptor/universal-app.interceptor';
import { FooterComponent } from './shared/footer/footer.component';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolBarComponent,
    FooterComponent,
  ],
  providers: [provideClientHydration(), { provide: HTTP_INTERCEPTORS, useClass: UniversalAppInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
