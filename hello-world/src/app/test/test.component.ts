import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
            
    <h2 class = "text-success">Welcome {{name}}</h2>
    <h2 [ngClass]= "classObj"> Welcome </h2>
    <h2 [class.text-success] = "hasError"> Welcome </h2>

    <h2 [style.color] = "'yellow'"> Style binding</h2>
    <h2 [style.color] = "hasError ? 'red' : 'Green'" > Style binding </h2>
    <h2 [ngStyle] = "styleObj" > ngstyle</h2>
    <button (click)= "onClick($event)"> Greet </button>
    {{greetings}}

    <input #myName type ="text" >
    <button (click) = "myLog(myName.value)"> log </button>

    <input [(ngModel)] = "ngModelname" type = "text">
    {{ngModelname}}
  
    

           `,
           //style binding
  styles: [`
    .text-success{
      color : green;
      }
    .text-isSpecial{
      font-style:italic;
    }
    .text-danger{
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {
public name = "Khushboo";
public ngModelname = "";
public isSpecial = "true"
public hasError = "true";
public classObj = {
 "text-danger" : this.hasError,
 "text-success" : !this.hasError,
 "text-isSpecial" : this.isSpecial
}

 public styleObj = {
   color : "blue" ,
   fontStyle : "italic"
 }
 public greetings= "";


  constructor() { }

  ngOnInit() {
  }

  onClick(event)
  {
    console.log(event);
   this.greetings = "Welcome Khushboo";
  }

  myLog(value)
  {
    console.log(value);
  }

}
