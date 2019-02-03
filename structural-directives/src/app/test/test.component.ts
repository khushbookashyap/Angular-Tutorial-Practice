import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-test',
  template: `
  <div [ngSwitch]="color">
  <div class = "text-Red" *ngSwitchCase= "'red'"> red </div>
  <div class = "text-Blue" *ngSwitchCase= "'blue'"> blue </div>
  <div class = "text-Green" *ngSwitchCase= "'green'"> green </div>
  <div *ngSwitchDefault > Pick Again</div>
  </div>

  <div *ngFor = "let color of colors, index as i">
  <div> {{i}} {{color}}</div>
  </div>

  <h2> {{"Wekcome" + name }}</h2>
   
  <button (click)="fireEvent()"> Send Event </button>

  `,
  styles: [`
  .text-Red {
    color : red
  }
  .text-Blue {

    color : blue
  }
  .text-green{
    color: green
  }
  `]
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public clickEvent  = new EventEmitter;
  public color  = "blue";
  public colors = ["red", "green", "blue", "yellow"];

  constructor() { }

  ngOnInit() {
  }

  fireEvent()
  {
    this.clickEvent.emit('Hey khushboo from child class');
  }

}
