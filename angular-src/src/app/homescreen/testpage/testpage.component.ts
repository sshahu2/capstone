import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { DomainServiceService } from '../domain-service.service';
import { BooksService } from "../../services/books.service";
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
    
  Books: any[];
  Tit="Delete";
  constructor(private _booksService: BooksService) { }
  filterString="";
  ngOnInit() {
    this.Books = this._booksService.getBooks();
    console.log(this.Books);
  }
}
