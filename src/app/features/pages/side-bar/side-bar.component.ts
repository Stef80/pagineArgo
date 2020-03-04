import { Component, OnInit } from '@angular/core';
import { ChiamataComponent } from '../chiamata/chiamata.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  chiamata: ChiamataComponent
  constructor() { }

  ngOnInit() {
  }
  show4: boolean = false;

 
  }

