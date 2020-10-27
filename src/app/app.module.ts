import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStaffComponent } from './board-staff/board-staff.component';
import { BoardRefereeComponent } from './board-referee/board-referee.component';
import { BoardExecutiveComponent } from './board-executive/board-executive.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardAgentComponent } from './board-agent/board-agent.component';
import { BoardPlayerComponent } from './board-player/board-player.component';
import { BoardUserComponent } from './board-user/board-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardStaffComponent,
    BoardRefereeComponent,
    BoardExecutiveComponent,
    BoardManagerComponent,
    BoardAgentComponent,
    BoardPlayerComponent,
    BoardUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
