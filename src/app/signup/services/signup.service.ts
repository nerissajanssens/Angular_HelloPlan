import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Newuser } from '../models/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  //Nieuwe gebruiker toevoegen aan de database
  addUser(user: Newuser) {
    return this.http.post<Newuser>("http://localhost:56002/api/gebruikers", user);
  } 
}
