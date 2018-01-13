import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "../../services/books.service";
import * as jspdf from 'jspdf';
import * as Chart from 'chart.js';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-subdom',
  templateUrl: './subdom.component.html',
  styleUrls: ['./subdom.component.css']
})
export class SubdomComponent implements OnInit {

   id: any;
    book: any;
  rate:any;
 da:number [];
  sub:any[];
    constructor(private _bookService: BooksService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this.book = this._bookService.getBook(this.id);
    this.da=this._bookService.getScore(this.id);
    this.sub=this._bookService.getSubdomain(this.id);
    console.log(this._bookService.getSubdomain(this.id));
    }
    
        
    goBack(): void {
        this.location.back();
    }

 
}
