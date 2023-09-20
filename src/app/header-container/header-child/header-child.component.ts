import { Component, Input, OnInit } from '@angular/core';
import { HeaderValueComponents } from './header-child-interface.component';

@Component({
  selector: 'app-header-child',
  templateUrl: './header-child.component.html',
  styleUrls: ['./header-child.component.scss']
})
export class HeaderChildComponent implements OnInit{

  ngOnInit(): void {
    
  }

  @Input() public NavBarListItems: HeaderValueComponents={
    leftNavComponentImg: [],
    rightNavPrimaryBtn: "",
    rightNavSecondaryBtn: ""
  }

}
