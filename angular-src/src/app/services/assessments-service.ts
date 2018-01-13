import { Injectable} from '@angular/core';
import { Init } from "./initial-assessments";

@Injectable()
export class AssessmentsService extends Init {
  constructor() {
    super();
    console.log("Initializing Assessments service ...");
    this.load();
  }

  getAssessmentsCount() {
    let assessments = JSON.parse(localStorage.getItem('assessments'));
    return assessments.length;
  }

  getAssessments() {
    let assessments = JSON.parse(localStorage.getItem('assessments'));
    console.log(assessments);
    return assessments;
  }

  getAssessment(subject: any) {
    let assessments = JSON.parse(localStorage.getItem('assessments'));
    let assessment:any = null;
    for (let i = 0; i < assessments.length; i++) {
      if (assessments[i].subject_name == subject) {
        assessment = assessments[i];
        break;
      }
    }
    return assessment;
  }

  addAssessment(newAssessment: any) {
    let assessments = JSON.parse(localStorage.getItem('assessments'));
    assessments.push(newAssessment);
    localStorage.setItem('assessments', JSON.stringify(assessments));
  }

  updateAssessment(updatedAssessment: any,subject:any) {
    console.log(subject);
    let assessments = JSON.parse(localStorage.getItem('assessments'));
    for (let i = 0; i < assessments.length; i++) {
      if (assessments[i].subject_name == subject) {
        assessments[i] = updatedAssessment;
      }
    }
    localStorage.setItem('assessments', JSON.stringify(assessments));
  }

  deleteAssessment(subject_name: any) {
    let assessments = JSON.parse(localStorage.getItem('assessments'));
    for (let i = 0; i < assessments.length; i++) {
      if (assessments[i].subject_name == subject_name) {
        assessments.splice(i, 1);
      }
    }
    localStorage.setItem('assessments', JSON.stringify(assessments));
  }
}
