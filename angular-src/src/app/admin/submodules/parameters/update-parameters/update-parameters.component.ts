import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-parameters',
  templateUrl: './update-parameters.component.html',
  styleUrls: ['./update-parameters.component.css']
})
export class UpdateParametersComponent implements OnInit {

  constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }

weight:any;
weightage:any;
parameters:any;
  subdomain:any;
  subject:any;
  assessment: any;
sub:any;
i:any;  
param:any;
parameter:any;
weight_copy:any;
scoreRemaining:any;
maxScore:any;

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];
  this.scoreRemaining = params['scoreRemaining'];
  this.subdomain=params['sub'];
    this.param=params['param'];
    this.parameter=this.param;
    this.weight=params['weight'];
    this.weight_copy=this.weight;
    this.maxScore=parseInt(this.weight)+parseInt(this.scoreRemaining);
    console.log(this.param);  
    });

this.assessment = this._assessmentService.getAssessment(this.subject);
console.log(this.assessment);
 
 for(this.i in this.assessment.sub_domain){
  if(this.assessment.sub_domain[this.i].name==this.subdomain){
    this.parameters=this.assessment.sub_domain[this.i].parameters;
    this.weightage=this.assessment.sub_domain[this.i].scoring_model;
console.log(this.parameters+" "+this.weightage);
}
 }
  }


onSubmit(formValue: any){
console.log(formValue);

for(this.i in this.parameters){
if(this.parameters[this.i]==this.parameter)
{
 this.parameters[this.i]=formValue.parameter;
this.weightage[this.i]=formValue.weightage;
}
}
console.log(this.assessment);
this._assessmentService.updateAssessment(this.assessment,this.subject);
    this.router.navigate(['../../../../'], { relativeTo: this.route });
  }
}

