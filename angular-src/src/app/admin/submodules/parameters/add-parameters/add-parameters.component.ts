import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-parameters',
  templateUrl: './add-parameters.component.html',
  styleUrls: ['./add-parameters.component.css']
})
export class AddParametersComponent implements OnInit {

assessment:any;
subject:any;
submodule:any;
storeValue=0;
scoreRemaining:0;

constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }
i:any;
   ngOnInit() {
this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];
    this.scoreRemaining=params['scoreRemaining'];
    console.log(this.scoreRemaining);
    console.log(this.subject);  
  this.submodule=params['sub'];
console.log(this.submodule);  
});
   

      this.assessment = this._assessmentService.getAssessment(this.subject);
  console.log(this.assessment);
   }  
onSubmit(formValue:any){
for(this.i in this.assessment.sub_domain){
  if(this.assessment.sub_domain[this.i].name==this.submodule){
    this.assessment.sub_domain[this.i].parameters.push(formValue.parameter);
    this.assessment.sub_domain[this.i].scoring_model.push(formValue.weightage);
  }

}
this._assessmentService.updateAssessment(this.assessment,this.subject);
    this.router.navigate(['../../'], { relativeTo: this.route });
}
}
