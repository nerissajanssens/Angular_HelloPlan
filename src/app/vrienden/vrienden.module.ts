import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendComponent } from './vriend/vriend.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VriendComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class VriendenModule { }
