import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerService } from './service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEditCustomerComponent } from './components/create-edit-customer/create-edit-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [CustomerListComponent, CreateEditCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [CustomerService]
})
export class CustomersModule { }
