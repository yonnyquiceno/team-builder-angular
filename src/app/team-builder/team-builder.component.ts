import { Component, OnInit } from '@angular/core';
import { TeamBuilderService } from './team-builder.service';
import { TeamMember } from '../team-member/team-member';
import * as _ from 'lodash';

@Component({
  selector: 'team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.scss']
})
export class TeamBuilderComponent implements OnInit {
  teamMembers = []

  constructor(private service: TeamBuilderService) {}

  ngOnInit(): void {
    this.getTeamMembers()
  }

  getTeamMembers() {
    this.service.getTeamMembers().subscribe((data: TeamMember[]) => this.teamMembers = this.camelize(data));
  }

  camelize(arr) {
    return arr.map((el) => (
      _.mapKeys(el, (value, key) => _.camelCase(key))
    ))
  }
}
