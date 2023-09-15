import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMusic } from 'src/app/app-component.interface';
import { MusicServiceService } from 'src/app/services/music-service.service';

@Component({
  selector: 'app-music-creation',
  templateUrl: './music-creation.component.html',
  styleUrls: ['./music-creation.component.scss']
})
export class MusicCreationComponent implements OnInit{
  public music! : Partial<IMusic>;

  constructor(private readonly router:Router, private readonly musicService :MusicServiceService){}

  ngOnInit(): void {
    this.music={
      albumName:"",
      authorName:"",
      category:"",
      imageUrl:""
    }
  }

  public onSubmit(){
    this.musicService.addMusic(this.music);
    this.music={
      albumName:"",
      authorName:"",
      category:"",
      imageUrl:""
    }
  }
  public onVisit(){
    this.router.navigate(['bodyContainer'])
  }
}
