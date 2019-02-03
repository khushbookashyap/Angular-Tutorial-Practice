import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees()
  {
    return [
      {"id" : 1, "name" : "khushboo", "age": 30},
      {"id" : 2, "name" : "chris", "age": 30},
      {"id" : 3, "name" : "joe", "age": 30},
      {"id" : 4, "name" : "sanjana", "age": 30},
      {"id" : 5, "name" : "palash", "age": 30}
    ];

  }
}
