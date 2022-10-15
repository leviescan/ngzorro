import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validateForm: FormGroup;
  


  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/[A-Z]/)]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', Validators.compose([Validators.required])],
      },
      {
        validators: this.confirmValidator('password', 'confirm')
    
    });

    
  }

  get f(){
    return this.validateForm.controls;
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

    confirmValidator (password: any, confirm:any) {

      return (formGroup: FormGroup) => {
        const passcontrol = formGroup.controls[password];
        const concontrol = formGroup.controls[confirm];

        if (concontrol.errors && !concontrol.errors['confirmValidator']) {
          return;
        }
        if (passcontrol.value !== concontrol.value) {
          concontrol.setErrors({confirmValidator: true});
        } else  {
        concontrol.setErrors(null);
        }
      
      }
   }

}
