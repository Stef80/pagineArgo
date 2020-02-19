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

  //nomeFi: string='';

  show: boolean = true;

  show2: boolean = true;

  show3: boolean = true;

  //show4: boolean = true;

  nomeFile: string='';

  toggleSideNav(){
    document.getElementById('sideBar').classList.toggle('active');
  }

  ret(){
    return this.nomeFile;
  }

}
