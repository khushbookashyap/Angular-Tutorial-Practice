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
    this._employeeDetail.getEmployees()
      .subscribe(var1 => this.Employee = var1);
  }

}
