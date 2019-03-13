import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics =['angular','react','java'];
  topichasError = true; 

  public userModel = new User('Khushboo','khushboo@tcs.com',9999999999,'default','morning',true);

  validateTopic(value)
  {
    if(value== "default") {
    this.topichasError = true;
    }
    else this.topichasError = false;

  }
}
