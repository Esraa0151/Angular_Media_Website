import { Component , OnInit} from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { authGuard } from '../auth.guard';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   islogin:boolean = false;
   navbarOpen = false;

   constructor (private _autho:AuthServiceService){}
  ngOnInit(): void {

    this._autho.userdata.subscribe(() =>
    {
      if(this._autho.userdata.getValue() !=null)
      {
        this.islogin = true;
      }

      else
      {

        this.islogin = false

      }
    })



  

    
  }

  logOut()
  {
    this._autho.logout()
  }

  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
