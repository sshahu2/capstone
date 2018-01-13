import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
admin:Object;
photo:any;
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
   this.photo="https://static1.squarespace.com/static/582e8efc440243aa943cc4bf/t/58522710e58c62343f3b10b9/1494202575608/sqsp-background.jpg?format=2500w";
   this.authService.getquestions().subscribe(profilem=>{
      this.admin=profilem.admin;
    },
    err=>{
      console.log(err);
      return false;
    }
    
    
    );
  }
//photo="https://static1.squarespace.com/static/582e8efc440243aa943cc4bf/t/58522710e58c62343f3b10b9/1494202575608/sqsp-background.jpg?format=2500w";
   
}