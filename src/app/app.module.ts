import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { BodyContainerModule } from './body-container/body-container.module';
import { GridContainerComponent } from './body-container/grid-container/grid-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    FooterContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
