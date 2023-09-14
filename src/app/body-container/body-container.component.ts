import { Component, OnInit } from '@angular/core';
import { IMusic } from './body-container.interface';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.scss']
})
export class BodyContainerComponent implements OnInit{

  public MusicList:Array<IMusic>=[];
  ngOnInit(): void {
    this.MusicList=[
      {id:1, albumName:"music1", authorName:"al-ameen", category:"relaxing", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:2, albumName:"music2", authorName:"al-ameen", category:"relaxing", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:3, albumName:"music3", authorName:"al-ameen", category:"relaxing", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:4, albumName:"music4", authorName:"al-ameen", category:"relaxing", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:5, albumName:"music5", authorName:"al-ameen", category:"relaxing", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:6, albumName:"music6", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:7, albumName:"music7", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:8, albumName:"music8", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:9, albumName:"music9", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:1, albumName:"music1", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:1, albumName:"music1", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
      {id:1, albumName:"music1", authorName:"al-ameen", category:"rock", imageUrl:"https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs" },
    ]
  }

}