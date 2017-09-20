import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: Http) {}
  getData() {
     return this.http.get("../../assets/cards.json")
         .map((res:any) => res.json().cards); //records in this case
}
  getRules() {
    return this.http.get("../../assets/rules.json")
        .map((res:any) => res.json());
  }
}
