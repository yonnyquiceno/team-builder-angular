import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TeamBuilderService } from '../team-builder/team-builder.service';
import { TeamMember } from '../team-member/team-member';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { addTeamMember } from "../team-builder/team-builder.actions";
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

@Component({
  selector: 'add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html'
})
export class AddTeamMemberModalComponent {
  addTeamMemberForm: FormGroup

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private service: TeamBuilderService,
    private store: Store<{ teamMembers: TeamMember[] }>,
  ) {
    this.createForm();
  }

  open(content) {
    const modalRef = this.modalService.open(content, {ariaLabelledBy: 'add-team-member-modal'})

    modalRef.result.then((result) => {
      this.createTeamMember()
    })
  }

  private createForm() {
    this.addTeamMemberForm = this.formBuilder.group({
      name: '',
      jobTitle: '',
      photo: ''
    });
  }

  private createTeamMember() {
    this.service.createTeamMember(this.snakeCase(this.addTeamMemberForm.value)).subscribe((response: any) => {
      this.store.dispatch(addTeamMember({teamMember: {id: response.body.id, ...this.addTeamMemberForm.value}}));
    });
  }

  private snakeCase(obj) {
    return _.mapKeys(obj, (value, key) => _.snakeCase(key))
  }
}
