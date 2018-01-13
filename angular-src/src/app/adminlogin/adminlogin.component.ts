import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 username:String;
password:String;
  constructor( private authservice:AuthService,
  private flashmessage:FlashMessagesService,
  private router:Router) { }

  ngOnInit() {
  }
onLoginSubmit(){
  const admin={
    username:this.username,
    password:this.password
  }
  this.authservice.authenticateAdmin(admin).subscribe(data=>{
    //console.log(data);
if(data.success){
  this.authservice.storeAdminData(data.token,data.admin);
  this.flashmessage.show("you are logged in",{cssClass:'alert-success',timeout:3000});
      this.router.navigate(['admin-home']);


}
 else{
      this.flashmessage.show("you are not logged in",{cssClass:'alert-danger',timeout:3000});
      this.router.navigate(['adminlogin']);
    }
  });
}
}
