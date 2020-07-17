import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  baseUrl: string = "api/"

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers').pipe(map((response: Customer[]) => response));
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + 'customer/' + customerId).pipe(map((response: Customer) => response));
  }

  createCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl + 'customers' , customer).pipe(map((response: Customer) => response));
  }
}
