import { Component  } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     
    error: string = '';
    isPasswordVisible: boolean = false;
    
  
  loginform:FormGroup = new FormGroup({
    email: new FormControl(null , [ Validators.required , Validators.email]),
    password: new FormControl(null , [Validators.required , Validators.pattern(`^[A-Za-z0-9\d@$!%*?&]{2,30}$`)])
  })


  constructor( private _AuthServiceService:AuthServiceService , private _Toastr:ToastrService , private _Rouer:Router )
  {
   
  }


  logindata(loginform:FormGroup)
  {
    if(this.loginform.valid)

    {
      this._AuthServiceService.login(this.loginform.value).subscribe((data) =>{
        

        if (data.message == "success")
        {
          localStorage.setItem('userToken' , data.token);
          this._AuthServiceService.encoduserdata();
          this._Rouer.navigate(['home'])
        }
      },
         (errors: HttpErrorResponse) =>
         {
          if (errors.status === 409) {
            // Handle conflict error (account already exists)
            this.error = "Incorrect email or password";
          } else {
            // Handle other errors
            this.error = "Incorrect email or password";
          }
         }

       );
   
  }
    
  }

  PasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
