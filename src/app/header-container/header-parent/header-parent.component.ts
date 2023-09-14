import { Component, OnInit } from '@angular/core';
import { HeaderValueComponents } from '../header-child/header-child-interface.component';

@Component({
  selector: 'app-header-parent',
  templateUrl: './header-parent.component.html',
  styleUrls: ['./header-parent.component.scss']
})
export class HeaderParentComponent implements OnInit{
  
  public TopNavBarList:  HeaderValueComponents ={
    leftNavComponentImg: ["https://icons.iconarchive.com/icons/fa-team/fontawesome/256/FontAwesome-Circle-Arrow-Left-icon.png", "https://icons.iconarchive.com/icons/fa-team/fontawesome/256/FontAwesome-Circle-Arrow-Right-icon.png"],
    rightNavPrimaryBtn: "Explore Premium",
    rightNavSecondaryBtn: "Install App",
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
