import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PollVriendComponent } from './poll-vriend/poll-vriend.component';



@NgModule({
  declarations: [PollComponent, PollDetailComponent, PollCreateComponent, PollVriendComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PollsModule { }
