import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  mode = new FormControl('over');

  constructor() { }

  ngOnInit() {
  }

}
