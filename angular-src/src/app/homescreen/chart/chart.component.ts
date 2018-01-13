import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { BooksService } from "../../services/books.service";
import * as jspdf from 'jspdf';
import * as Chart from 'chart.js';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,AfterViewInit {

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
    canvas: any;
  ctx: any;
    ngAfterViewInit() {
        
        let dat=this.da;
        let subd=this.sub;
        
        console.log("score "+dat);
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    Chart.defaults.scale.ticks.beginAtZero=true;
    let myChart = new Chart(this.ctx, {
    type: 'polarArea',
    data: {
        labels: subd,
        datasets: [{
            label: '# of Votes',
            data: dat,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
    'rgba(255,250,205)',
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255,250,205)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation:{
            animateScale:false
        },
        responsive: false,
        display:true,
        
      }
});
  }
        
    goBack(): void {
        this.location.back();
    }
    save(){
        
     html2canvas(document.getElementById('myChart')).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jspdf();
    doc.addImage(img,'JPEG',5,20);
    doc.save('testCanvas.pdf');
    });
}
 
}
