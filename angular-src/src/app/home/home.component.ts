import { Component, OnInit } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {GettokenService} from '../services/gettoken.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username:String;
password:String;

  constructor(
    private gettokenservice:GettokenService,
    private authservice:AuthService,
  private flashmessage:FlashMessagesService,
  private router:Router) { }

  
  tlogin(){
     const userm={
    username:this.username,
    password:this.password
  }
 this.authservice.socialUser().subscribe(data=>{
    console.log(data);
  })}
}
 


