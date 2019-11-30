import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poll } from '../models/poll.model';
import { PollGebruiker } from '../models/poll-gebruiker.model';
import { User } from 'src/app/login/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  //Ophalen van alle polls
  getPolls(): Observable<Poll[]>{
    return this.http.get<Poll[]>("http://localhost:56002/api/polls");
    
  }

  //Ophalen van alle polls die behoren tot één bepaalde gebruiker
  getPollByUser(user: Number){
      return this.http.get<User>("http://localhost:56002/api/gebruikers/"+ user);
  }

  //Nieuwe poll toevoegen
  addPoll(poll: Poll) {
    return this.http.post<Poll>("http://localhost:56002/api/polls", poll);
  } 

  //Een poll verwijderen
  deletePoll(poll: number){
    return this.http.delete<Poll>("http://localhost:56002/api/polls/" + poll);
     
  }

  //Een bepaalde poll ophalen op basis van de pollID
  getPoll(poll: number) {
    return this.http.get<Poll>("http://localhost:56002/api/polls/"+ poll);
  } 

  //Een gebruiker toevoegen aan een poll
  addPollGebruiker(pollgebruiker: PollGebruiker){
    return this.http.post<Poll>("http://localhost:56002/api/pollgebruikers", pollgebruiker);
  }

}
