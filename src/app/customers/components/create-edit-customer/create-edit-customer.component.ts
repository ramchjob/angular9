import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerHelper } from '../../helpers/customer-helper';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'chimata-shop-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.scss']
})
export class CreateEditCustomerComponent implements OnInit {

  @Output() newCustomer: EventEmitter<Customer> = new EventEmitter();
  customerForm: FormGroup;

  constructor() { 
    this.customerForm = CustomerHelper.initializeCustomerForm();
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.customerForm.reset();
  }

  async saveCustomer(): Promise<void> {
    let customer: Customer = {
      firstName: this.customerForm.controls['firstName'].value,
      lastName: this.customerForm.controls['lastName'].value,
      email: this.customerForm.controls['email'].value,
      status: 1
    }
    try {
      console.log(JSON.stringify(customer))
      this.newCustomer.emit(customer);
    }
    catch (error){
        console.log('Error' + error)
    }

  }

}
