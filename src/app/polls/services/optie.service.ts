import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Optie } from '../models/optie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptieService {

  constructor(private http: HttpClient) { }

  //Alle opties ophalen die behoren tot een bepaalde poll
  getOpties(poll: number): Observable<Optie[]>{
    return this.http.get<Optie[]>("http://localhost:56002/api/opties/" + poll);
    
  }

  //Nieuwe optie toevoegen aan de poll
  addOptie(optie: Optie){
      return this.http.post<Optie>("http://localhost:56002/api/opties", optie);
  }

  //Een optie verwijderen
  deleteOptie(optie: number){
    return this.http.delete<Optie>("http://localhost:56002/api/opties/" + optie);
  }
}
