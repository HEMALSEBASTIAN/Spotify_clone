import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IMusic } from '../app-component.interface';

const USER_KEY='musicData';
@Injectable()
export class MusicServiceService {

  constructor(private readonly dataService:LocalStorageService) { }
  currentMusicList!:Array<IMusic>;
  newMusic!:IMusic;
  public addMusic(music : Partial<IMusic>)
  {
    this.currentMusicList=this.dataService.get(USER_KEY) || [];
    console.log("appended");

    this.newMusic = {
      ...this.newMusic,
      id: this.currentMusicList.length+1,
      ...music,
    }

    music.id=this.currentMusicList.length+1;
    this.currentMusicList.push(this.newMusic);
    this.dataService.set(USER_KEY, this.currentMusicList);
  }
  public getMusics(): Array<IMusic>
  {
    return this.dataService.get(USER_KEY);
  }
}
