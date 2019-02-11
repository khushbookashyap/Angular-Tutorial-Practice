import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2> employee list </h2>
      <ul *ngFor = "let employee of Employee">
      <li> {{employee.name}} </li>
      </ul> 
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public Employee = [];
  constructor(private _employeeList :EmployeeServiceService) {}
   

  ngOnInit() {
    this.Employee = this._employeeList.getEmployees();
  }

}
