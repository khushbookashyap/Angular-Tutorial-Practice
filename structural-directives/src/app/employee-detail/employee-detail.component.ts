import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2> Employee Detail</h2>  
  <ul *ngFor = "let employee of Employee">
  <li> {{employee.id}}, {{employee.name}} , {{employee.age}} </li>
  </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public Employee= [];
  constructor(private _employeeDetail : EmployeeServiceService) { }

  ngOnInit() {
    this.Employee = this._employeeDetail.getEmployees();
  }

}
