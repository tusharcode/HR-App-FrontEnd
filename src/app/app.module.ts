import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PayrollComponent } from './payroll/payroll.component';
import { LeaveComponent } from './leave/leave.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { ConfirmemployeeComponent } from './employee/confirmemployee/confirmemployee.component';
import { ExtendprobperiodComponent } from './employee/extendprobperiod/extendprobperiod.component';
import { EmployeeresignComponent } from './employee/employeeresign/employeeresign.component';
import { EmployeebankdetailsComponent } from './employee/employeebankdetails/employeebankdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowemployeesComponent } from './employee/showemployees/showemployees.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmployeeComponent,
    PayrollComponent,
    LeaveComponent,
    AddemployeeComponent,
    EmployeedetailsComponent,
    ConfirmemployeeComponent,
    ExtendprobperiodComponent,
    EmployeeresignComponent,
    EmployeebankdetailsComponent,
    PagenotfoundComponent,
    ShowemployeesComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
