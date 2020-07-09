import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamBuilderService } from './team-builder/team-builder.service';
import { AddTeamMemberModalComponent } from './add-team-member-modal/add-team-member-modal.component'
import { StoreModule } from '@ngrx/store';
import { teamBuilderReducer } from './team-builder/team-builder.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TeamBuilderComponent,
    HelloWorldComponent,
    TeamMemberComponent,
    AddTeamMemberModalComponent
  ],
  exports: [
    AddTeamMemberModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ teamMembers: teamBuilderReducer })
  ],
  providers: [
    TeamBuilderService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
