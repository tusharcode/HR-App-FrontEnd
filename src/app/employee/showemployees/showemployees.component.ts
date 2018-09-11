import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from '../../services/add-employee.service';

@Component({
  selector: 'app-showemployees',
  templateUrl: './showemployees.component.html',
  styleUrls: ['./showemployees.component.css']
})
export class ShowemployeesComponent implements OnInit {

  employees = [];

  constructor( private employeeService : AddEmployeeService ) { }

  ngOnInit() {
    this.employeeService.showEmployees().subscribe(
      (res) => {
        this.employees = res;
      },
      (err) => {
        console.log(err);
        
      }
    )
  }

}
