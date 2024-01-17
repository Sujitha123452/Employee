import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';

@Component({
 selector: 'app-employee',
 templateUrl: './employee.component.html',
 styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   title = 'Employee Details';
   hide = false;
   action=false;
   employees: any[] = [];

   constructor(private employeeService: EmployeeService) {}

 ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
 }
   toggleHide() {
      this.hide = !this.hide;
   }
   toggleSide(){
    this.action=!this.action;
  }

}
