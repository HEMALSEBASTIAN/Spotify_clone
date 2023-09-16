import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IMusic } from '../app-component.interface';

const USER_KEY='musicData';
@Injectable()
export class MusicServiceService {

  constructor(private readonly dataService:LocalStorageService) { }
  currentMusicList!:Array<IMusic>;
  public addMusic(music : Partial<IMusic>)
  {
    this.currentMusicList=this.dataService.get(USER_KEY) || [];
    console.log("appended");
    music.id=this.currentMusicList.length+1;
    this.currentMusicList.push(music as IMusic);
    this.dataService.set(USER_KEY, this.currentMusicList);
  }
  public getMusics(): Array<IMusic>
  {
    return this.dataService.get(USER_KEY);
  }
  public getMusicById(musicId:number):IMusic| undefined{
    this.currentMusicList=this.dataService.get(USER_KEY);
    return this.currentMusicList.find(x=>x.id==musicId) as IMusic; 
  }
  public updateMusic(music: IMusic){
    console.log(music);
    this.currentMusicList=this.dataService.get(USER_KEY)||[];
    let index=this.currentMusicList.findIndex(x=>x.id==music.id);
    console.log(index);
    if(index!==-1)
    {
      this.currentMusicList[index]={...this.currentMusicList[index], ...music};
      this.dataService.set(USER_KEY,this.currentMusicList);
    }
  }
}
