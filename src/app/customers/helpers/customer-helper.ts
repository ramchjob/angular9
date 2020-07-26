import { FormGroup, FormControl, Validators } from '@angular/forms';

export class CustomerHelper {
  static initializeCustomerForm() : FormGroup {
    
    let customerForm: FormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    return customerForm;
  }

}