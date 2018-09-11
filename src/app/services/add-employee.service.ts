import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as CONFIG from '../config/app.properties';


@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  private baseUrl = `http://${CONFIG.ENV.serverIp}:${CONFIG.ENV.port}/api`;
  private addEmployeeUrl = this.baseUrl + "/basicinfo";
  private showEmployeesUrl = this.baseUrl + "/employeedetails";
  private getOneEmployeeUrl = this.baseUrl + "/basicinfo";

  constructor( private http : HttpClient ) { }

  addEmployee(employee) {
    return this.http.post(this.addEmployeeUrl, employee);
  }

  showEmployees() {
    return this.http.get<any>(this.showEmployeesUrl);
  }

  getOneEmployee(empNo) {
    return this.http.get(this.getOneEmployeeUrl + "/" + empNo);
  }

}
