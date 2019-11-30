import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { PollComponent } from './polls/polls/poll/poll.component';
import { PollDetailComponent } from './polls/polls/poll-detail/poll-detail.component';
import { VriendComponent } from './vrienden/vriend/vriend.component';
import { PollVriendComponent } from './polls/polls/poll-vriend/poll-vriend.component';
import { AuthGuard } from './login/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'poll', component: PollComponent, canActivate: [AuthGuard]},
  { path: 'poll/:id', component: PollDetailComponent, canActivate: [AuthGuard]},
  { path: 'poll-detail/:id', component: PollDetailComponent, canActivate: [AuthGuard]},
  { path: 'vrienden', component: VriendComponent, canActivate: [AuthGuard]},
  { path: 'poll-vriend/:id', component: PollVriendComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
