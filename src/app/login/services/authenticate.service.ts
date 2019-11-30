import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/user-login.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  Login = new BehaviorSubject(this.isLoggedIn()); 
  constructor(private _httpClient: HttpClient) { }
  //Kijken of de gebruiker bestaat en aanmelden
  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("http://localhost:56002/api/Gebruikers/authenticate", userLogin);
  }

  //Kijken of er een token aanwezig is
  isLoggedIn() {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
