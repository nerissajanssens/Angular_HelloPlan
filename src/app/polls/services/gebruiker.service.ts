import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/login/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) { }

  //Gebruiker ophalen op basis van de gebruikerID
  getGebruiker(id: number) {
    return this.http.get<User>("http://localhost:56002/api/gebruikers/"+ id);
    } 
}
