import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You have selected the department with id = {{departmentId}}</h3>
    <a (click) = "goPrevious()">Previous</a>
    <a (click) = "goNext()">Next </a>

    <button (click) = "gotoDepartments()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private actiroute : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    //let id = parseInt(this.actiroute.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.actiroute.paramMap.subscribe((params : ParamMap )=>
    {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    })
    
  }

  gotoDepartments()
    {
      let selectedId = this.departmentId ? this.departmentId : null
      //this.router.navigate(['/departments',{id : selectedId}]);
      this.router.navigate(['../',{id : selectedId}],{relativeTo : this.actiroute});

    }
  
  goPrevious()
  {
    let previousId = this.departmentId - 1 ; 
    this.router.navigate(['/departments',previousId]); 
  }
  goNext()
  {
    let nextId = this.departmentId + 1 ; 
    this.router.navigate(['/departments',nextId]);
    
  }

  
}
