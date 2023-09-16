import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMusic } from 'src/app/app-component.interface';
import { MusicServiceService } from 'src/app/services/music-service.service';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})

export class GridContainerComponent implements OnInit{
  public musicList!:Array<IMusic>;
  constructor(private readonly musicService:MusicServiceService,
    private readonly router:Router){}
  public ngOnInit(): void {
    this.musicList=this.musicService.getMusics();
  }

  public edit(musicId?: number)
  {
    this.router.navigate(['createMusic'], {queryParams: {musicId: musicId}});
  }
}



