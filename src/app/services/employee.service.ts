import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string ="http://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
  return this.http
            .get(this.url)
            .pipe(map((response: any) => response));
  }
}
