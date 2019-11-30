import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './login/services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //Variabelen
  gebruiker: string = null;
  loggedIn: Boolean = false;
  navbarOpen = false;

  constructor(private router: Router, private _authenticateService: AuthenticateService ){
    //Automatisch updaten van gebruiker en loggedIn
    this._authenticateService.Login.subscribe(e=> {
      if(e == true){
        this.gebruiker = localStorage.getItem("user");
        this.loggedIn = true;
      }else{
        this.gebruiker = "";
        this.loggedIn = false;
      }
    }) 
  }

  //Veranderen state van de navbar
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  //Uitloggen van de gebruiker
  loguit() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
