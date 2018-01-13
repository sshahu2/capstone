import { Component, OnInit } from '@angular/core';
import {AssessmentsService} from './../services/assessments-service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

assessments: any[];


  constructor(private _assessmentService: AssessmentsService) { }

  ngOnInit() {
    this.assessments = this._assessmentService.getAssessments();
    console.log(this.assessments);
  }

  deleteAssessment(subject: any) {
    this._assessmentService.deleteAssessment(subject);
    this.assessments = this._assessmentService.getAssessments();
  }
}
