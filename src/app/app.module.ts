import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterContainerModule } from './footer-container/footer-container.module';
import { HeaderContainerComponent } from './header-container/header-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    BodyContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
