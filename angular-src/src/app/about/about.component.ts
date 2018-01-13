import { Component, OnInit } from '@angular/core';
import {AuthService} from './../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']
  
})
export class AboutComponent implements OnInit {
   userm:Object;

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.authService.getprofile().subscribe(profilem=>{
      this.userm=profilem.userm;
    },
    err=>{
      console.log(err);
      return false;
    }
    
    
    );
  }

 }
