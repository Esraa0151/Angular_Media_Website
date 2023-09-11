import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {BehaviorSubject, Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private _Router:Router , private _auth:AuthServiceService) { }

  canActivate():boolean|Observable<any>{
     if(this._auth.userdata.getValue() != null)
     {
      return true
     }

     else
     {
      this._Router.navigate(['login']);
        return false

     }
      
    }
    
  }

