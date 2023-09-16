import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { BodyContainerComponent } from './body-container.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicServiceService } from '../services/music-service.service';



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

  ],
  providers:[MusicServiceService],
  exports:[BodyContainerComponent]
})
export class BodyContainerModule { }
