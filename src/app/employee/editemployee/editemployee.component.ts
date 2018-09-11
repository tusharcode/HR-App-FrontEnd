import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeService } from '../../services/add-employee.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employeeNo;

  employee = {};

  title = 'gfhvgh';

  personalInfoBlock : boolean = true;
  personalInfoForm : boolean = false;

  educationBlock : boolean = true;
  educationForm : boolean = false;

  bgCheckBlock : boolean = true;
  bgCheckForm : boolean = false;

  constructor( private routes : ActivatedRoute, private employeeService : AddEmployeeService ) { }

  ngOnInit() {
    this.routes.paramMap.subscribe(
      (params) => {
        this.employeeNo = params.get("employeeNo");
      }
    );

    this.employeeService.getOneEmployee(this.employeeNo).subscribe(
      (res) => {
        this.employee = res;
        console.log(this.employee);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  editPersonal() {
    this.personalInfoBlock = false;
    this.personalInfoForm = true;
  }

  cancelPersonal() {
    this.personalInfoBlock = true;
    this.personalInfoForm = false;
  }

  addEducation() {
    this.educationBlock = false;
    this.educationForm = true;
  }

  cancelEducation() {
    this.educationBlock = true;
    this.educationForm = false;
  }

  editBackground() {
    this.bgCheckBlock = false;
    this.bgCheckForm = true;
  }

  cancelBackground() {
    this.bgCheckBlock = true;
    this.bgCheckForm = false;
  }

}
