import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer;

  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.maxLength(128)]],
      email: ['', [Validators.required, Validators.email, ]]
    });
  }

   async ngOnInit() {
    this.customers = await this.customerService.getCustomers().toPromise();
  }

  async onSubmit() {
      const customer: Customer = <Customer>{};
      customer.firstName = this.customerForm.controls['firstName'].value;
      customer.lastName = this.customerForm.controls['lastName'].value;
      customer.email = this.customerForm.controls['email'].value;
      customer.status = 1;
      const newCustomer: Customer = await this.customerService.createCustomer(customer).toPromise();
      this.customers.push(newCustomer);
      this.customerForm.reset();
    
}

updateCustomer(customer: Customer) {
  this.selectedCustomer = customer;
}

}
