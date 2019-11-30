import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SignupModule } from './signup/signup.module';
import { SecurityInterceptor } from './login/security.interceptor';
import { PollsModule } from './polls/polls/polls.module';
import { VriendenModule } from './vrienden/vrienden.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PollsModule,
    HttpClientModule,
    SignupModule,
    VriendenModule,
    SharedModule
  ],
  exports:[
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
