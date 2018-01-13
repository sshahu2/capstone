import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssessmentComponent } from './update-assessment.component';

describe('UpdateAssessmentComponent', () => {
  let component: UpdateAssessmentComponent;
  let fixture: ComponentFixture<UpdateAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
