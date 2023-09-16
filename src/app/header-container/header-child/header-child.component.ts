import { Component, Input, OnInit } from '@angular/core';
import { HeaderValueComponents } from './header-child-interface.component';

@Component({
  selector: 'app-header-child',
  templateUrl: './header-child.component.html',
  styleUrls: ['./header-child.component.scss']
})
export class HeaderChildComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() public NavBarListItems: HeaderValueComponents={
    leftNavComponentImg: [],
    rightNavPrimaryBtn: "",
    rightNavSecondaryBtn: ""
  }

  DirectToLogin(){
    // route to the login page
    
  }

  DirectToSignup(){
    // route to the sign up page
  }

}
