import { Component, OnInit } from '@angular/core';
import { IMusic } from 'src/app/app-component.interface';
import { MusicServiceService } from 'src/app/services/music-service.service';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit{
  musicList!:Array<IMusic>;
  constructor(private readonly musicService:MusicServiceService){}
  ngOnInit(): void {
    this.musicList=this.musicService.getMusics();
  }

}



