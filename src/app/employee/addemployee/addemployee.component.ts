import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

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

  onSubmit() {
    console.log(this.employeeData);
  }

}
