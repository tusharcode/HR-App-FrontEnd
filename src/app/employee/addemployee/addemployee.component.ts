import { Component, OnInit } from '@angular/core';
import { AddEmployeeService } from '../../services/add-employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  employeeData = {};

  formNo = 1;

  first : any = true;
  second : any = false;
  third : any = false;
  fourth : any = false;

  pf = false;
  esi = false;

  constructor( private addEmpService : AddEmployeeService ) {
  }

  ngOnInit() {
  }

  // Form Navigation finctions----------------------------------
  onNext1() {
    this.formNo = 2;
    this.first = false;
    this.second = true;
  }

  onPrevious1() {
    this.formNo = 1;
    this.first = true;
    this.second = false;
  }

  onNext2() {
    this.formNo = 3;
    this.second = false;
    this.third = true;
  }

  onPrevious2() {
    this.formNo = 2;
    this.second = true;
    this.third = false;
  }

  onNext3() {
    this.formNo = 4;
    this.third = false;
    this.fourth = true;
  }

  onPrevious3() {
    this.formNo = 3;
    this.third = true;
    this.fourth = false;
  }
  // Form Navigation finctions End----------------------------------

  //PF Check
  pfChecked() {
    this.pf = !this.pf;
  }

  //ESI Check
  esiChecked() {
    this.esi = !this.esi;
  }

  registerEmployee() {
    // console.log(this.employeeData);

    this.addEmpService.addEmployee(this.employeeData).subscribe(
      (res) => {
        console.log(res);
        alert('success')
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
