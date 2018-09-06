import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ConfirmemployeeComponent } from './employee/confirmemployee/confirmemployee.component';
import { EmployeebankdetailsComponent } from './employee/employeebankdetails/employeebankdetails.component';
import { EmployeedetailsComponent } from './employee/employeedetails/employeedetails.component';
import { EmployeeresignComponent } from './employee/employeeresign/employeeresign.component';
import { ExtendprobperiodComponent } from './employee/extendprobperiod/extendprobperiod.component';

const routes: Routes = [
  { path : '', redirectTo : '/home', pathMatch : 'full' },
  { path : 'home', component : HomeComponent },

  { path : 'employee/new', component : AddemployeeComponent},

  { path : 'employee/confirm', component : ConfirmemployeeComponent },
  { path : 'employee/bank', component : EmployeebankdetailsComponent },
  { path : 'employee/employees', component : EmployeedetailsComponent },
  { path : 'employee/resign', component : EmployeeresignComponent },
  { path : 'employee/extendprobation', component : ExtendprobperiodComponent },
  { path : 'leave', component : LeaveComponent },
  { path : 'payroll', component : PayrollComponent },
  { path : '**', component : PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
