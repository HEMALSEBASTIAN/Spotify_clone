import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MusicServiceService } from '../services/music-service.service';
import { BodyContainerComponent } from './body-container.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { MusicCreationComponent } from './music-creation/music-creation.component';
import { AuthGuard } from '../services/auth.guard';

const route: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    component: BodyContainerComponent
  },
  {
    path: 'createMusic',
    canActivate: [AuthGuard],
    component: MusicCreationComponent,
  },
]


@NgModule({
  declarations: [
    BodyContainerComponent,
    GridContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TitleCasePipe,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
  providers: [MusicServiceService],
  exports: [BodyContainerComponent]
})
export class BodyContainerModule { }
