import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
  authToken:any;
  userm:any;
  aauthToken:any;
  admin:any;
  accessTokenUrl:string;

  constructor(private http:Http) { }


registerUser(userm){
let headers=new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:3000/auth/register',userm,{headers:headers}).
map(res=>res.json());
}
authenticateUser(userm){
  let headers=new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:3000/auth/authenticate',userm,{headers:headers}).
map(res=>res.json());

}
registerAdmin(admin){
let headers=new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:3000/auth/aregister',admin,{headers:headers}).
map(res=>res.json());
}
authenticateAdmin(admin){
  let headers=new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:3000/auth/aauthenticate',admin,{headers:headers}).
map(res=>res.json());

}
socialUser(){
 let headers=new Headers();
   headers.append('Content-Type','application/json');
   return this.http.get("http://localhost:3000/auth/twitter/redirect",{headers:headers}).
map(res=>res.json());
}


getprofile(){
    let headers=new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);

headers.append('Content-Type','application/json');
return this.http.get('http://localhost:3000/auth/profilem',{headers:headers}).map(res=>res.json());


}
getquestions(){
    let headers=new Headers();
    this.aloadToken();
    headers.append('Authorization',this.aauthToken);

headers.append('Content-Type','application/json');
return this.http.get('http://localhost:3000/auth/questions',{headers:headers}).map(res=>res.json());


}
storeUserData(token,userm){
  localStorage.setItem('id_token',token);
  localStorage.setItem('userm',JSON.stringify(userm));
  this.authToken=token;
  this.userm=userm;
}
storeAdminData(token,admin){
  localStorage.setItem('aid_token',token);
  localStorage.setItem('admin',JSON.stringify(admin));
  this.aauthToken=token;
  this.admin=admin;
}
loadToken(){
  const token =localStorage.getItem('id_token');
  this.authToken=token;
}
aloadToken(){
  const token =localStorage.getItem('aid_token');
  this.aauthToken=token;
}

loggedIn(){
  return tokenNotExpired('id_token') ;
}
aloggedIn(){
  return tokenNotExpired('aid_token') ;
}

logout(){
  this.authToken=null;
  this.userm=null;
  localStorage.clear();

}
alogout(){
  this.aauthToken=null;
  this.admin=null;
  localStorage.clear();

}

}