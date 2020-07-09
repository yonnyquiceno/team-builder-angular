import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { TeamMember } from '../team-member/team-member'

@Injectable()
export class TeamBuilderService {
  constructor(private http: HttpClient) { }

  getTeamMembers() {
    return this.http.get<TeamMember[]>('http://localhost:3000/team_members')
      .pipe(
        catchError(this.handleError)
      );
  }

  createTeamMember(teamMember: TeamMember) {
    return this.http.post<TeamMember>('http://localhost:3000/team_members', teamMember, {observe: 'response'})
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTeamMember(teamMember: TeamMember) {
    return this.http.delete<TeamMember>(`http://localhost:3000/team_members/${teamMember.id}`, {observe: 'response'})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
