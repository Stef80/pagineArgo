import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  //animations: [
  //  trigger('collapsable', [
  //    state('opened', style({
  //      height:'200px'
  //    })),
  //    state('closed', style({
  //      height:0,
  //      padding:0
  //    })),
  //    transition('opened <=> closed', [
  //      animate('0.7s')
  //    ])
  //  ])
  //],
  templateUrl: './card.component.html',
//  styleUrls: ['./card.component.scss'],
  //template: `
  //  <div class="card bg-dark text-white mb-1">
  //    <div class="card-header" (click)="toggle()" >title</div>
  //    <div class="card-body"[@collapsable]="state">
  //    body
  //    </div>
  //  </div>
  //`,
})
export class CardComponent //implements OnInit 
{
  state = 'opened';

  toggle(){
    //this.opened = !false;
    this.state = this.state === 'opened'? 'closed' : 'opened';
  }

//  constructor() { }
//
//  ngOnInit() {
//  }

}