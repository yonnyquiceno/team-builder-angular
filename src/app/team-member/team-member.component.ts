import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from "./team-member";

@Component({
  selector: 'team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  @Input() teamMember: TeamMember;

  removeUser = () => {
    alert("removed!")
  }

  constructor() { }

  ngOnInit(): void {

  }
}
