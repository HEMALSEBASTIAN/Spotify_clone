import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicCreationComponent } from './body-container/music-creation/music-creation.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'createMusic',
    pathMatch: 'full'
  },
  {
    path: 'createMusic',
    component: MusicCreationComponent,
  },
  {
    path: 'bodyContainer',
    component: BodyContainerComponent,
  }, 
  {
    path: "signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
