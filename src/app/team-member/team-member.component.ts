import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from "./team-member";
import { removeTeamMember } from '../team-builder/team-builder.actions';
import { TeamBuilderService } from '../team-builder/team-builder.service';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() teamMember: TeamMember;

  constructor(
    private service: TeamBuilderService,
    private store: Store<{ teamMembers: TeamMember[] }>
  ) { }

  ngOnInit(): void {

  }

  removeTeamMember($event) {
    $event.preventDefault()
    this.service.deleteTeamMember(this.snakeCase(this.teamMember)).subscribe((response: any) => {
      if (response.ok) {
        this.store.dispatch(removeTeamMember({teamMember: this.teamMember}));
      }
    });
  }

  private snakeCase(obj) {
    return _.mapKeys(obj, (value, key) => _.snakeCase(key))
  }
}
