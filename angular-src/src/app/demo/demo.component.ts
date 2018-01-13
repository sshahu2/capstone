import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Router,ActivatedRoute, Params,UrlTree} from '@angular/router';
import {GettokenService } from '../services/gettoken.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  accessToken:any=null;
  accessResponse:any=null;
  params:any;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private tokenService:GettokenService,
  private authservice:AuthService,
  private flashmessage:FlashMessagesService,) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params:any)=>{
        this.params = params;
        console.log("Route Params: "+JSON.stringify(this.params));
      });
      if(this.params==null)
        return ;
      if(this.params.error)
      {
        console.log("ERROR: "+this.params.error_description);
        return;
      }
      else{
        this.tokenService.getToken(this.params.code).subscribe(data=>{
          if(data.success){
  this.authservice.storeUserData(data.Token,data.user);
  this.flashmessage.show("you are logged in",{cssClass:'alert-success',timeout:3000});
      this.router.navigate(['about']);


}
 else{
      this.flashmessage.show("you are not logged in",{cssClass:'alert-danger',timeout:3000});
      this.router.navigate(['login']);
 }
    });
    /*      //  error=>{console.log("ERROR: "+error);return});
      //}
      if(this.accessResponse!=null)
      {
        console.log(this.accessResponse.accessToken);
      }

  

      
  }}*/
}
  }
}

        