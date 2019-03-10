import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics =['angular','react','java']; 

  public userModel = new User('Khushboo','khushboo@tcs.com',9999999,'angular','morning',true);
}
