import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Poll } from '../../models/poll.model';
import { Router } from '@angular/router';
import { PollGebruiker } from '../../models/poll-gebruiker.model';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})
export class PollCreateComponent implements OnInit {

  save: boolean = false;
  submitted: boolean = false;
  model: Poll = new Poll(0, "");
  modelGebruiker: PollGebruiker = new PollGebruiker(0,0,0);
  userID: Number = Number(localStorage.getItem("userID"));
  
  constructor(private _pollService : PollService, private router: Router) { }

  ngOnInit() {}

  //Aanmaken van poll
  onCreate(){
    this.submitted = true;
    this.save = true;
    this._pollService.addPoll(this.model).subscribe(result => {
      var pollID = result.pollID;
      this.modelGebruiker.pollId = pollID;
      this.modelGebruiker.gebruikerId = this.userID;
      this._pollService.addPollGebruiker(this.modelGebruiker).subscribe();
      this.router.navigate(['poll' , pollID]);
    });
    } 
}
