import { Injectable } from '@angular/core';
import { Vriend } from '../models/vriend.model';
import { User } from 'src/app/login/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VriendenService {

  constructor(private http: HttpClient) { }

  //Ophalen van de vriendenverzoeken waarvan ze bevestigd zijn
  getVrienden(id: Number): Observable<Vriend[]>{
    return this.http.get<Vriend[]>("http://localhost:56002/api/Vriends/" +  id);
  }

  //Ophalen van een gebruiker op basis van de gebruikersnaam
  getUser(naam: String){
    return this.http.get<User>("http://localhost:56002/api/Gebruikers/naam/" + naam);
  }

  //Vriendschapsverzoek toevoegen
  addVriendVerzoek(vriend: Vriend){
    return this.http.post<Vriend>("http://localhost:56002/api/Vriends/VriendToevoegen", vriend);
  }

  //Alle vriendschapsverzoeken waarvan ze nog niet bevestigd zijn
  getVerzoeken(vriend: Number){
    return this.http.get<Vriend[]>("http://localhost:56002/api/Vriends/Verzoeken/" +  vriend);
  }

  //Bevestigen van een vriendschapsverzoek
  confirm(id: Number, vriend: Vriend){
    return this.http.put<Vriend>("http://localhost:56002/api/Vriends/Confirm/" + id, vriend);  
  }

  //Verwijderen van vriendschapsverzoek
  delete(id: Number){
    return this.http.delete<Vriend>("http://localhost:56002/api/Vriends/" + id);
  }
}
