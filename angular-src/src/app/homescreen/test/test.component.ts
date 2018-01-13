import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params,Router } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  id_id: any;
  id:any;
    question: any;
    book:any;
    @Output() onSubmit=new EventEmitter();
    //sel:string[]=["title","genre","ISBN","author"];
    constructor(private _bookService: BooksService, private route: ActivatedRoute,private router: Router, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id=+params['id'];
            this.id_id = +params['id_id'];
            
        });
        this.book = this._bookService.getBook(this.id);
        this.question=this.book.subdomain[this.id_id-1];
    }
  
  
        
    goBack(): void {
        this.location.back();
    }
    
 autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value=0;
  vertical = false;
  value2=0;
  value3=0;
  value4=0;
  numlist:number[] = [];
  sum=0;
  score:any;
  num=0;
  submit(score: any,id_id:any,id:any){
      console.log("val="+this.question.sub_score);
      for(let i=0;i<4;i++)
      this.sum+=this.numlist[i];
      this.num=this._bookService.getQuestionCount(this.id,this.id_id);
      console.log("quest= " + JSON.stringify(this.num ));
      this._bookService.updateScore(this.sum/this.num,this.id_id,this.id);
          
        
    console.log("Value = " + JSON.stringify(this.id ));
    console.log(" Value = " + JSON.stringify(this.question.sub_score ));
    
      this.location.back();
    }
    
}
