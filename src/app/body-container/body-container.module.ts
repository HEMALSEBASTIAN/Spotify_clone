import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { BodyContainerComponent } from './body-container.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { FormsModule } from '@angular/forms';
import { MusicServiceService } from '../services/music-service.service';



@NgModule({
  declarations: [
    BodyContainerComponent,
    GridContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TitleCasePipe

  ],
  providers:[MusicServiceService],
  exports:[BodyContainerComponent]
})
export class BodyContainerModule { }
