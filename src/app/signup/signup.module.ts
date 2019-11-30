import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './services/signup.service';
import { SharedModule } from '../shared/shared.module';
import { MustMatchDirective } from '../_helpers/must-match.directive';

@NgModule({
  declarations: [SignupComponent, MustMatchDirective],
  imports: [
    SharedModule
  ],
  providers: [SignupService],
  exports: [SignupComponent]
})
export class SignupModule { }
