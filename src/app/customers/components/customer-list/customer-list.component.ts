import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  customerDataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>(); // DATA;
  
  customers: Customer[] = [];
  selectedCustomer: Customer;
  customerListColumns : string[] = ['id', 'firstName', 'lastName', 'email', 'actions'];
  editCustomerAction: boolean = false;

  constructor(private customerService: CustomerService) {
    
  }

   async ngOnInit() {
    this.customers = await this.customerService.getCustomers().toPromise();
    this.buildDataSource();
  }
  buildDataSource() {
    this.customerDataSource = new MatTableDataSource(this.customers);
    this.customerDataSource.paginator = this.paginator;
        this.customerDataSource.sort = this.sort;
  }

  deleteCustomer(customer: Customer){

  }
  editCustomer(customer: Customer){
     this.selectedCustomer = customer;
     this.editCustomerAction = false;
  }

updateCustomer(customer: Customer) {
  this.selectedCustomer = customer;
}

}
