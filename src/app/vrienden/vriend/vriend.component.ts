import { Component, OnInit } from '@angular/core';
import { VriendenService } from '../services/vrienden.service';
import { Observable } from 'rxjs';
import { Vriend } from '../models/vriend.model';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/login/models/user.model';

@Component({
  selector: 'app-vriend',
  templateUrl: './vriend.component.html',
  styleUrls: ['./vriend.component.scss']
})
export class VriendComponent implements OnInit {

  constructor(private _vriendService: VriendenService) { }

  //Variabelen
  vrienden: Observable<Vriend[]>
  verzoeken: Observable<Vriend[]>
  vriend2: Vriend
  model: Vriend = new Vriend(0, false, 0, 0);
  userID: Number = Number(localStorage.getItem("userID"));
  user: User;
  gebruikerForm = new FormGroup({
    gebruikersnaam: new FormControl(''),
  }); 

  ngOnInit() {
    this.getRequest(this.userID);
    this.getVrienden();
  }

  //Ophalen van alle vrienden
  getVrienden(){
    this._vriendService.getVrienden(this.userID).subscribe(result => {
      this.vrienden = this._vriendService.getVrienden(this.userID);
    })
  }

  //Nieuw vriendschapverzoek toevoegen
  voegToe(){
    this._vriendService.getUser(this.gebruikerForm.value.gebruikersnaam).subscribe(result => {
      this.user = result;
      this.model.friendTo = this.user.gebruikerID;
      this.model.bevestigd = false;
      this.model.friendFrom = Number(localStorage.getItem("userID")); 
      this._vriendService.addVriendVerzoek(this.model).subscribe(result => {
      });
    });
    
  }

  //Ophalen van alle verzoeken die nog niet bevestigd zijn voor de gebruiker v
  getRequest(v: Number){
    this._vriendService.getVerzoeken(v).subscribe(result => {
      this.verzoeken = this._vriendService.getVerzoeken(v);
    });
  }

  //Vriendschapsverzoek r bevestigen
  //Extra vriendschapsrelatie leggen
  confirm(r: Vriend){
    var vriendNaar = r.friendFrom;
    var vriendVan = r.friendTo;
    this.vriend2 = new Vriend(0, true, vriendVan, vriendNaar);
    this._vriendService.confirm(r.vriendID, r).subscribe(result => {
      this._vriendService.addVriendVerzoek(this.vriend2).subscribe();
      this.ngOnInit();
    })
  }
  
  //Vriendschapsverzoek r verwijderen
  delete(r: Vriend){
    this._vriendService.delete(r.vriendID).subscribe(result => {
      this.verzoeken = this._vriendService.getVerzoeken(Number(localStorage.getItem("userID")));
    })
  }
}
