import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyContainerComponent } from './body-container.component';
import { GridContainerComponent } from './grid-container/grid-container.component';



@NgModule({
  declarations: [
    BodyContainerComponent,
    GridContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BodyContainerComponent]
})
export class BodyContainerModule { }
