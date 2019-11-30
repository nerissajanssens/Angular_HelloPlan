import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vriend } from 'src/app/vrienden/models/vriend.model';
import { PollGebruiker } from '../../models/poll-gebruiker.model';
import { GebruikerService } from '../../services/gebruiker.service';
import { VriendenService } from 'src/app/vrienden/services/vrienden.service';
import { Observable } from 'rxjs';
import { PollService } from '../../services/poll.service';

@Component({
  selector: 'app-poll-vriend',
  templateUrl: './poll-vriend.component.html',
  styleUrls: ['./poll-vriend.component.scss']
})
export class PollVriendComponent implements OnInit {
 
  constructor(private route: ActivatedRoute, private _gebruikerService: GebruikerService, private _vriendService: VriendenService, private _pollService: PollService ) { }
  
  //Variabelen
  pollID: number;
  model: PollGebruiker = new PollGebruiker(0,0,0);
  vrienden: Observable<Vriend[]>;
  userID: Number = Number(localStorage.getItem("userID"));

  ngOnInit() {
    //Ophalen van de pollID die meegestuurd werd
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
    })
    this.getVrienden();
  }

  //Vriend toevoegen aan een poll met de opgehaalde pollID + vriendID
  add(v: Vriend){
      this.model.pollId = this.pollID;
      this._gebruikerService.getGebruiker(v.friendTo).subscribe(result => {
        this.model.gebruikerId = result.gebruikerID;
        this._pollService.addPollGebruiker(this.model).subscribe();
      });
  }

  //Alle vrienden van de gebruiker ophalen
  getVrienden(){
    this._vriendService.getVrienden(this.userID).subscribe(result => {
      this.vrienden = this._vriendService.getVrienden(this.userID);
    })
  }

}
