import { Component, Input } from '@angular/core';
import { IMusic } from '../body-container.interface';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent {
  @Input() public MusicList: Array<IMusic>=[];
}



