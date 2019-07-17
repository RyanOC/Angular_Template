import {FormControl} from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
//import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { map, filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {

  mode = new FormControl('over');
  isMobile: Boolean;

  constructor() { }

  ngOnInit() {
    this.isMobile = false;
  }

  toggleDrawer(){
    if(this.isMobile){
      //this.drawer.toggle();
    }     
  }
}
