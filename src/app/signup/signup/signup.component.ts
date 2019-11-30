import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Newuser } from '../models/newuser.model';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  //Variabelen
  user: Observable<Newuser>;
  submitted: boolean = false;
  model: Newuser = new Newuser(0, '', '', '');

  constructor(private _signupService: SignupService, private router: Router) { }

  ngOnInit() {}

  //Nieuwe gebruiker registreren
  onSubmit() {
    this.submitted = true;
    this._signupService.addUser(this.model).subscribe();
    this.router.navigate(['/login']);
  }

}
