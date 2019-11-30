import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Poll } from '../../models/poll.model';
import { PollService } from '../../services/poll.service';
import { User } from 'src/app/login/models/user.model';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  //Variabelen
  create: Boolean = false
  polls: Observable<Poll[]>
  userID: Number = Number(localStorage.getItem("userID"));
  user: User
  constructor(private _pollService: PollService, private router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  //Ophalen van de polls waaraan de gebruiker deelneemt
  getUser() {
    this._pollService.getPollByUser(this.userID).subscribe(result => {
      this.user = result;
    })
  }

  //Tonen van de create-poll component
  createPoll() {
    this.create = true;
  }

  //Verwijderen van een poll
  deletePoll(p: Poll) {
    this._pollService.deletePoll(p.pollID).subscribe(result => {
      this.polls = this._pollService.getPolls();
    });
  }

  //Tonen van de poll-detail component + doorsturen van pollID
  bekijkPoll(p: Poll) {
    this.router.navigate(['poll-detail', p.pollID]);
  }

  //Tonen van de poll-vriend component + doorsturen van pollID
  addVrienden(p: Poll) {
    this.router.navigate(['poll-vriend', p.pollID]);
  }
}
