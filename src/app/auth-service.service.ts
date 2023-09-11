import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import {BehaviorSubject, Observable} from 'rxjs'




@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private _HttpClient:HttpClient , private _Ruter:Router ) {

    if(localStorage.getItem('userToken') !=null)
    {
       this.encoduserdata();
      
       

    }
   }

    
  userdata = new BehaviorSubject(null);

  encoduserdata()
  {
    let encodeddata = JSON.stringify(localStorage.getItem('userToken'));
    this.userdata.next (jwtDecode(encodeddata));

  }
  logout()
  {
    localStorage.removeItem('userToken');
    this.userdata.next(null);
    this._Ruter.navigate(['login']);
  }
  register(formdata:object):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, formdata)
  }

  login(formdata:object):Observable<any>
  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, formdata)
  }
}
