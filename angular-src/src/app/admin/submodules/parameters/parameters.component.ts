import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  subject:any;
  assessment:any;
  subdomain:any;
parameters:any;

constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }

i:any;
j:any;
score_model:any;
totalScore=0;
scoreRemaining=0;
  

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];
    this.subdomain=params['sub'];
    console.log(this.subdomain);  
   
   });

this.assessment = this._assessmentService.getAssessment(this.subject);

for(this.i in this.assessment.sub_domain){
  if(this.assessment.sub_domain[this.i].name==this.subdomain){
    this.parameters=this.assessment.sub_domain[this.i].parameters;
this.score_model=this.assessment.sub_domain[this.i].scoring_model;  
}
}

for(this.i in this.score_model){
  console.log(this.score_model[this.i]);
  this.totalScore=this.totalScore+parseInt(this.score_model[this.i]);
}
this.scoreRemaining=100-this.totalScore;
console.log(this.scoreRemaining);
}





deleteParameter(param:any){
for(this.i in this.assessment.sub_domain){
  if(this.assessment.sub_domain[this.i].name==this.subdomain){
    //this.parameters=this.assessment.sub_domain[this.i].parameters;
for(this.j in this.assessment.sub_domain[this.i].parameters){  
if(this.assessment.sub_domain[this.i].parameters[this.j]==param){
  this.assessment.sub_domain[this.i].parameters.splice(this.j,1);
this.scoreRemaining+=parseInt(this.assessment.sub_domain[this.i].scoring_model[this.j]);
  this.assessment.sub_domain[this.i].scoring_model.splice(this.j,1);

break;
}
}
break;
}
}
 this._assessmentService.updateAssessment(this.assessment,this.subject);
 
}
}