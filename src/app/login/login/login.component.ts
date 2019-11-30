import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login.model';
import { AuthenticateService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authenticateService : AuthenticateService, private router: Router) { }

  //Variabelen
  submitted: boolean = false;
  model: UserLogin = new UserLogin('', '');
  isLoggedIn : boolean = false;

  ngOnInit() {}

  //Inloggen van de gebruiker.
  //Gebruiker wordt vervolgens doorverwezen naar de pollcomponent
  onSubmit() {
    this.submitted = true;
    this._authenticateService.authenticate(this.model).subscribe(result =>{
      this._authenticateService.Login.next(result.token ? true : false); 
      this.isLoggedIn = true;
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", result.gebruikersnaam);
      localStorage.setItem("userID", result.gebruikerID.toString());
      this.router.navigate(['/poll']);
    }); 
  }

}
