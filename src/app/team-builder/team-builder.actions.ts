import { createAction, props } from '@ngrx/store';
import { TeamMember } from "../team-member/team-member";

export const setTeamMembers = createAction(
  '[TeamMember] SetTeamMembers',
  props<{ teamMembers: TeamMember[] }>()
);
export const addTeamMember = createAction(
  '[TeamMember] AddTeamMember',
  props<{ teamMember: TeamMember }>()
);
export const removeTeamMember = createAction(
  '[TeamMember] RemoveTeamMember',
  props<{ teamMember: TeamMember }>()
);
