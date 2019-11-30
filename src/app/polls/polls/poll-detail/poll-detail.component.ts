import { Component, OnInit } from '@angular/core';
import { Optie } from '../../models/optie.model';
import { ActivatedRoute } from '@angular/router';
import { PollService } from '../../services/poll.service';
import { OptieService } from '../../services/optie.service';
import { Poll } from '../../models/poll.model';
import { Observable } from 'rxjs';
import { Stem } from '../../models/stem.model';
import { StemService } from '../../services/stem.service';
import { User } from 'src/app/login/models/user.model';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private _pollService: PollService, private _optieService: OptieService, private _stemService: StemService) { }

  //Variabelen
  pollID: number;
  poll: Poll;
  model: Optie = new Optie(0, "", this.pollID, 0);
  opties: Observable<Optie[]>
  stemmodel: Stem = new Stem(0, 0, 0);
  userID: Number = Number(localStorage.getItem("userID"));
  gestemd: Boolean = false;
  vrienden: Observable<User[]>
  optieStem: Stem;

  ngOnInit() {
    //Ophalen van pollID die meegestuurd werd
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
    })
    this.getOpties();
    this.pollDetail();
  }
  
  //Alle opties ophalen die behoren tot de poll (pollID)
  getOpties() {
    this._optieService.getOpties(this.pollID).subscribe(result => {
      this.opties = this._optieService.getOpties(this.pollID);
    })
  }

  //Nieuwe optie toevoegen
  onSave() {
    this.model.pollID = this.pollID;
    this._optieService.addOptie(this.model).subscribe(result => {
      this.opties = this._optieService.getOpties(this.pollID);
    })
  }

  //Ophalen van een poll op basis van een pollID
  pollDetail() {
    this._pollService.getPoll(this.pollID).subscribe(result => {
      this.poll = result;
    });
  }

  //Verwijderen van een optie
  deleteOptie(o: Optie) {
    this._optieService.deleteOptie(o.optieID).subscribe(result => {
      this.pollDetail();
      this.opties = this._optieService.getOpties(this.pollID);
    })
  }

  //Stem toevoegen
  stem(o: Optie) {
    this.stemmodel.gebruikerID = this.userID;
    this.stemmodel.optieID = o.optieID;
    this._stemService.addStem(this.stemmodel).subscribe(result => {
      this.gestemd = true;
      this.optieStem = result;
      this._stemService.getCount(this.pollID).subscribe(() => {
        this.ngOnInit();
      });
    })
   
  }

  //Stem verwijderen
  onWijzigStem() {
    this.gestemd = false;
    this._stemService.deleteStem(this.optieStem.stemID).subscribe(result => {
    })
  }
}