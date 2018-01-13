import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
//import { DomainServiceService } from '../domain-service.service';
import { BooksService } from "../../services/books.service";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
Books: any[];
  Tit="Delete";
  constructor(private _booksService: BooksService) { }
  filterString="";
  ngOnInit() {
    this.Books = this._booksService.getBooks();
    console.log(this.Books);
  }

}
