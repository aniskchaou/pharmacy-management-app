
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})
export default class ConstructorValidation {
    formGroup: FormGroup;

    public get formGroupInstance(): FormGroup {
        return this.formGroup;
    }

    constructor() {
        this.formGroup = this.createFormGroup()
    }

    public checkValidation() {

        if (this.formGroup.invalid) {
            return false;
        }
        return true;
    }
    createFormGroup() {
        return new FormGroup({

            manufacturer_name: new FormControl('', Validators.required),
            mobile: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            fax: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            // country: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            zip: new FormControl('', Validators.required),
            previous_balance: new FormControl('', Validators.required),
        })
    }
}
