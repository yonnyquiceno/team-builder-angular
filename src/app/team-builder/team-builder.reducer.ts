import { createReducer, on } from '@ngrx/store';
import { setTeamMembers, addTeamMember, removeTeamMember } from './team-builder.actions';

export const initialState = [{id: "", name: "", jobTitle: "", photo: ""}];

const _teamBuilderReducer = createReducer(initialState,
  on(setTeamMembers, (state, { teamMembers }) => (teamMembers)),
  on(addTeamMember, (state, { teamMember }) => {
    return [...state, teamMember]
  }),
  on(removeTeamMember, (state, { teamMember }) => {
    const members = [...state]
    const index = members.findIndex(member => member.id === teamMember.id)
    members.splice(index, 1)
    return members
  }),
);

export function teamBuilderReducer(state, action) {
  return _teamBuilderReducer(state, action);
}
