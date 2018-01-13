import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from '../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.css']
})
export class AddAssessmentComponent implements OnInit {

  constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

 onSubmit(formValue: any){
    let assessmentCount = this._assessmentService.getAssessmentsCount();
    let newAssessment = {
           subject_name: formValue.subject,
           sub_domain:[]
        };
    this._assessmentService.addAssessment(newAssessment);
    this.router.navigate(['../'], { relativeTo: this.route });

  }

}
