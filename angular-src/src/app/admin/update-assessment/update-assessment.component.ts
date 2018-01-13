import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-assessment',
  templateUrl: './update-assessment.component.html',
  styleUrls: ['./update-assessment.component.css']
})
export class UpdateAssessmentComponent implements OnInit {


  constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }
  subject:any;
  sub:any;
  assessment: any;

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];
    console.log(this.subject);  
  this.sub=this.subject;  
  });
   

      this.assessment = this._assessmentService.getAssessment(this.subject);
  
}

onSubmit(formValue: any){


    this.assessment.subject_name= formValue.assessment_title;
    console.log(this.assessment);    
    this._assessmentService.updateAssessment(this.assessment,this.sub);
    this.router.navigate(['admin-home/admin']);
  }
}
