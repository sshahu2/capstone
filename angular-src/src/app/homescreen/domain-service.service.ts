import { Injectable } from '@angular/core';
import { Init } from "./initial-dom";

@Injectable()
export class DomainServiceService  extends Init {
  constructor() {
    
    super();
    console.log("Initializing Books service ...");
    this.load();
  }

  

  getDomains() {
    let Domains = JSON.parse(localStorage.getItem('Domains'));
    return Domains;
  }

  /*getDomain(id: any) {
    let Domains = JSON.parse(localStorage.getItem('Domains'));
    let domain:any = null;
    for (let i = 0; i < Domains.length; i++) {
      if (Domains[i].id == id) {
        domain = Domains[i].sub_category;
        break;
      }
    }
    return domain;
  }*/
}