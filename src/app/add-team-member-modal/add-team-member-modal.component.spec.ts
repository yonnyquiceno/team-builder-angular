import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamMemberModalComponent } from './add-team-member-modal.component';

describe('AddTeamMemberModalComponent', () => {
  let component: AddTeamMemberModalComponent;
  let fixture: ComponentFixture<AddTeamMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
