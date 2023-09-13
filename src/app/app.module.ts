import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    BodyContainerComponent,
    FooterContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
