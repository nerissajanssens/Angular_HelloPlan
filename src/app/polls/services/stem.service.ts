import { Injectable } from '@angular/core';
import { Stem } from '../models/stem.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StemService {

  constructor(private http: HttpClient) { }

  //Een stem toevoegen
  addStem(stem: Stem) {
    return this.http.post<Stem>("http://localhost:56002/api/stems", stem);
  }
  
  //Een stem verwijderen
  deleteStem(stem: Number){
    return this.http.delete<Stem>("http://localhost:56002/api/stems/" + stem);
  }

  //Stemmen per optie, per poll tellen
  getCount(pollid: Number){
    return this.http.get<Stem>('http://localhost:56002/api/stems/count/' + pollid);
  }

}
