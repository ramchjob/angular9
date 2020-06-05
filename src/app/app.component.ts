import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  response : any;
  employees: any;  
  constructor(
    private employeeService: EmployeeService
) {}
  
  async ngOnInit() {
    
    this.response = await this.employeeService.getEmployees().toPromise();

    if (this.response){
      this.employees = this.response.data;
    }
  }
  



  

  



}
