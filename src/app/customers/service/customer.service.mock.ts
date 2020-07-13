import { Customer } from '../model/customer';
import { Observable, Observer } from 'rxjs';

export class CustomerServiceMock {
    getCustomersData(): Customer[] {
        return [
            {
                "id": 1,
                "firstName": "First",
                "lastName": "Last",
                "email": "F@L.com",
                "status": 1
            },
            {
                "id": 2,
                "firstName": "New",
                "lastName": "Customer",
                "email": "n@c.com",
                "status": 1
            }
        ];
    }
    getCustomers(): Observable<Customer[]> {
        return new Observable((observer: Observer<Customer[]>) => {
            setTimeout(() => {
                observer.next(this.getCustomersData());
            }, 1);
        });
    }
    
}