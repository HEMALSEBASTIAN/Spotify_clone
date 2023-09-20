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
import { LocalStorageService } from './services/local-storage.service';
import { MusicCreationComponent } from './body-container/music-creation/music-creation.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserAuthService } from './services/userauth-service.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpinterceptorInterceptor } from './httpinterceptor.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HeaderContainerComponent,
    HeaderParentComponent,
    HeaderChildComponent,
    MusicCreationComponent,
    LoginPageComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyContainerModule,
    FooterContainerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [LocalStorageService, UserAuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
