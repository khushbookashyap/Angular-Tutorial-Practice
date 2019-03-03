import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department Details</h3>
    <ul *ngFor= "let department of departments" >
    <li (click) = "onSelect(department)" [class.select] = "isSelect(department)" >{{department.id}},{{department.name}}</li>
    </ul>
  `,
  styles: [`
    .select{
      background-color : green ;
    }
    
   `]
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  constructor(private router : Router,private actiroute: ActivatedRoute) { }
 
  departments = [
    {"id" : 1, "name" : "Angular"},
    {"id" : 2, "name" : "React"},
    {"id" : 3, "name" : "Ajax"},
    {"id" : 4, "name" : "Java"}
  ]
 onSelect(department)
   {
     this.router.navigate(['/departments',department.id]);
   }
 
  ngOnInit() {
    this.actiroute.paramMap.subscribe((params:ParamMap) =>
    {
      let id = params.get('id');
      this.selectedId = id;
    })
  }

    isSelect(department)
      {
        return department.id === this.selectedId;
      }
    
    
  

}
