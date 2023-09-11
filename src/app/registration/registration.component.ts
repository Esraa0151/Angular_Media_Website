import { Component , OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  error:string = '';


  registerform:FormGroup = new FormGroup({
    name: new FormControl(null , [Validators.required, Validators.minLength(3) , Validators.maxLength(30)  ]),
    age: new FormControl(null , [Validators.min(16) , Validators.max(80) , Validators.required]),
    email: new FormControl(null , [ Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern(`^[A-Za-z0-9\d@$!%*?&]{2,30}$`)]),
    rePassword: new FormControl(null , [Validators.required , Validators.pattern(`^[A-Za-z0-9\d@$!%*?&]{2,30}$`)])
  })
   

  constructor( private _AuthServiceService:AuthServiceService , private _Rouer:Router  )
  {
   
  }
   
  confirmPasswordValidator(control: FormControl): { [key: string]: any } | null {
    const password = this.registerform.get('password')?.value;
    return password && control.value !== password ? { passwordMismatch: true } : null;
  }
  ngOnInit(): void 
  {
    this.registerform.get('rePassword')?.setValidators([Validators.required, this.confirmPasswordValidator.bind(this)]);
    // Reset validation on password change
    this.registerform.get('password')?.valueChanges.subscribe(() => {
      this.registerform.get('rePassword')?.updateValueAndValidity();
    }); 
  }


  getsubmitteddata(registerform: FormGroup) {
    console.log(this.registerform.value);
    console.log("hello");
    if (this.registerform.valid) {
      this._AuthServiceService.register(this.registerform.value).subscribe(
        (data) => {
          if (data.message === "success") {
            this._Rouer.navigate(['login']);
            console.log("success");
            console.log(registerform.value);
          }
        },
        (errors: HttpErrorResponse) => {
          if (errors.status === 409) {
            // Handle conflict error (account already exists)
            this.error = "Account Already Exists";
            console.log("duj@gmail.com")
            // Clear the form if needed
            this.registerform.reset();
          } else {
            // Handle other errors
            this.error = "Account Already Exists";
          }
        }
      );
    }
  }
  

}
