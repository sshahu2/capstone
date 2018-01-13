import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SubmodulesFilterPipe } from './../../services/submodules-filter.pipe';

@Component({
  selector: 'app-submodules',
  templateUrl: './submodules.component.html',
  styleUrls: ['./submodules.component.css']
})
export class SubmodulesComponent implements OnInit {

  constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }

sub_domain:any[];
subject:any;
assessment:any;

isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];  
  });
  console.log(this.subject);
  this.assessment = this._assessmentService.getAssessment(this.subject);
console.log(this.assessment);
  this.sub_domain=this.assessment.sub_domain;
    
}

i:any;

 deleteSubmodule(sub: any) {
console.log(sub);
for( this.i in this.assessment.sub_domain){
if(this.assessment.sub_domain[this.i].name==sub){
  
  this.assessment.sub_domain.splice(this.i, 1);

}
}
    this._assessmentService.updateAssessment(this.assessment,this.subject);
  }

}
