import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../service/customer.service';
import { FakeMatIconRegistry } from '@angular/material/icon/testing';
import { CustomerServiceMock } from '../../service/customer.service.mock';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { configureTestSuite } from 'ng-bullet';
import { of } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerService: CustomerService;
  let customerServiceMock : CustomerServiceMock = new CustomerServiceMock();

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
          MaterialModule,
          FormsModule,
          HttpClientTestingModule,
          SharedModule,
          BrowserAnimationsModule,
          ReactiveFormsModule,
          MatSnackBarModule
      ],
      providers: [ { provide: CustomerService, useClass: CustomerServiceMock },
        { provide: MatIconRegistry, useClass: FakeMatIconRegistry } ]
    })
    .compileComponents();
  });

    afterAll(() => {
        const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
        const styles: HTMLCollectionOf<HTMLStyleElement> | [] = head.getElementsByTagName('style');

        for (let i: number = 0; i < styles.length; i++) {
            head.removeChild(styles[i]);
        }
    });


  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    customerService = TestBed.inject(CustomerService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.customers = customerServiceMock.getCustomersData();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the data source',  fakeAsync(() => {
    spyOn(customerService, 'getCustomers').and.returnValue(of(customerServiceMock.getCustomersData()));
    component.ngOnInit();
    tick(100);
    fixture.detectChanges();
    expect(customerService.getCustomers).toHaveBeenCalled();
    expect(component.customers).toEqual(customerServiceMock.getCustomersData());
    expect(component.customerDataSource.data).toEqual(customerServiceMock.getCustomersData());
  }));

});
