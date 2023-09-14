import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterContainerModule } from './footer-container/footer-container.module';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { BodyContainerModule } from './body-container/body-container.module';
import { GridContainerComponent } from './body-container/grid-container/grid-container.component';
import { HeaderParentComponent } from './header-container/header-parent/header-parent.component';
import { HeaderChildComponent } from './header-container/header-child/header-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    FooterContainerComponent,
    HeaderParentComponent,
    HeaderChildComponent,
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
