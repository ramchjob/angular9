import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerHelper } from '../../helpers/customer-helper';

@Component({
  selector: 'chimata-shop-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.scss']
})
export class CreateEditCustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor() { 
    CustomerHelper.initializeCustomerForm();
  }

  ngOnInit(): void {
  }

  onCancel() {

  }

  saveCustomer() {
    
  }

}
