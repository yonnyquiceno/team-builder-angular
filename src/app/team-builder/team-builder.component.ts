import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TeamBuilderService } from './team-builder.service';
import { TeamMember } from '../team-member/team-member';
import { setTeamMembers } from './team-builder.actions';
import { AddTeamMemberModalComponent } from '../add-team-member-modal/add-team-member-modal.component';
import * as _ from 'lodash';

@Component({
  selector: 'team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.scss']
})
export class TeamBuilderComponent implements OnInit {
  teamMembers = []
  teamMembers$: Observable<TeamMember[]>;

  constructor(
    private service: TeamBuilderService,
    private store: Store<{ teamMembers: TeamMember[] }>
  ) {
    this.teamMembers$ = store.pipe(select('teamMembers'));
    this.teamMembers$.subscribe(teamMembers => this.teamMembers = teamMembers);
  }

  ngOnInit(): void {
    this.getTeamMembers()
  }

  getTeamMembers() {
    this.service.getTeamMembers().subscribe((data: TeamMember[]) => {
      this.store.dispatch(setTeamMembers({teamMembers: this.camelize(data)}));
    });
  }

  openModal() {
    //this.child.open()
  }

  camelize(arr) {
    return arr.map((el) => (
      _.mapKeys(el, (value, key) => _.camelCase(key))
    ))
  }
}
