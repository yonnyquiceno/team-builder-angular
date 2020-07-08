import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TeamBuilderService } from '../team-builder/team-builder.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-team-member-modal',
  templateUrl: './add-team-member-modal.component.html'
})
export class AddTeamMemberModalComponent {
  closeResult = '';
  addTeamMemberForm: FormGroup

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private service: TeamBuilderService
  ) {
    this.createForm();
  }

  open(content) {
    const modalRef = this.modalService.open(content, {ariaLabelledBy: 'add-team-member-modal'})

    modalRef.result.then((result) => {
      this.createTeamMember()
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private createForm() {
    this.addTeamMemberForm = this.formBuilder.group({
      name: '',
      job_title: '',
      photo: ''
    });
  }

  private createTeamMember() {
    this.service.createTeamMember(this.addTeamMemberForm.value).subscribe((response: any) => {
      if (response.ok) {
        //this.teamMembers = [data]
      }
    });
  }
}
