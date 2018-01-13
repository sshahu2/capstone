import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from './../../../services/assessments-service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-submodules',
  templateUrl: './update-submodules.component.html',
  styleUrls: ['./update-submodules.component.css']
})
export class UpdateSubmodulesComponent implements OnInit {

  constructor(private _assessmentService: AssessmentsService, private route: ActivatedRoute, private router: Router) { }

  subdomain:any;
  subject:any;
  assessment: any;
subdomain_loop:any;
sub:any;
  
  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
  this.subject = params['subject'];
    this.subdomain=params['sub'];
    this.sub=this.subdomain;
    console.log(this.subdomain);  
    });

this.assessment = this._assessmentService.getAssessment(this.subject);
console.log(this.assessment);
 
}

i:any;

onSubmit(formValue: any){

for(this.i in this.assessment.sub_domain){
if(this.assessment.sub_domain[this.i].name==this.sub)
{
 this.assessment.sub_domain[this.i].name=this.subdomain;
}

}


console.log(this.assessment);
this._assessmentService.updateAssessment(this.assessment,this.subject);
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}

