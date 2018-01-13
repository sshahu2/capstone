import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-add-submodules',
  templateUrl: './add-submodules.component.html',
  styleUrls: ['./add-submodules.component.css']
})
export class AddSubmodulesComponent implements OnInit {
constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }

  subject:any;
assessment:any;

  ngOnInit() {
this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];
    console.log(this.subject);  
  
  });
   

      this.assessment = this._assessmentService.getAssessment(this.subject);
  console.log(this.assessment);  
}

 onSubmit(formValue: any){
   console.log(formValue);
     let newsubmodule = {
      name: formValue.submodule,
      parameters:[],
      scoring_model:[]

      };
        console.log(newsubmodule);
        this.assessment.sub_domain.push(newsubmodule);
    console.log(this.assessment);
    this._assessmentService.updateAssessment(this.assessment,this.subject);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}

