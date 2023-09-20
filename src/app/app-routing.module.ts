import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },

  {

    path: 'bodyContainer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./body-container/body-container.module').then(m => m.BodyContainerModule)

  },
  {
    path: 'loginpage',
    component: LoginPageComponent
  },
  {
    path: "signuppage",
    component: SignupComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
