import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerService } from './service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEditCustomerComponent } from './components/create-edit-customer/create-edit-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [CustomerListComponent, CreateEditCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ConfirmationDialogComponent]
})
export class CustomersModule { }
