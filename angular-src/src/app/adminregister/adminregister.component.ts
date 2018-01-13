import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;

  constructor(private validateservice:ValidateService,
  private authservice:AuthService,
  private flashmessage:FlashMessagesService,
  private router:Router
  ) { }

  ngOnInit() {
  }


onRegisterSubmit(){
  const admin={
     name:this.name,
  username:this.username,
    email:this.email,
  password:this.password
  }
  if(!this.validateservice.validateRegister(admin)){
    //console.log("full details");
   this.flashmessage.show("Please fill complete details",{cssClass:'alert-danger',timeout:3000});
    return false;
  }
   if(!this.validateservice.validateEmail(admin.email)){
 //console.log("email");
     this.flashmessage.show("Correct format of email required",{cssClass:'alert-danger',timeout:3000})
    return false;
  }
  this.authservice.registerAdmin(admin).subscribe(data=>{
    if(data.success){
     this.flashmessage.show("you are registered",{cssClass:'alert-success',timeout:3000});
     this.router.navigate(['/adminlogin']);
    }
    else{
      this.flashmessage.show("you are not  registered",{cssClass:'alert-danger',timeout:3000});
      this.router.navigate(['/adminregister']);
    }
  })
}
}
