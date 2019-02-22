import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2> employee list </h2>
  <h3> {{errorMsg}} </h3>
      <ul *ngFor = "let x of Employee">
      <li> {{x.name}} </li>
      </ul> 
      
  
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public Employee = [];
  public errorMsg;
  constructor(private _employeeService :EmployeeServiceService) {}
   

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(var1 => this.Employee = var1,
                 error => this.errorMsg = error);
  }

}
