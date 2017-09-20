import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ColorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ColorProvider {

  color1:any;
  color2:any;

  constructor(public http: Http) {

  }
  initColor () {
    if (localStorage.getItem("color1")) {
        this.color1 = localStorage.getItem("color1");
        this.color2 = localStorage.getItem("color2");
        console.log(localStorage)
  }
  else {
    localStorage.setItem("color1", "lionTop");
    localStorage.setItem("color2", "lionBot");
    this.initColor();
  }
}


  changeColor(clan, clan2){
    localStorage.setItem("color1", clan);
    localStorage.setItem("color2", clan2);
    this.color1 = localStorage.getItem("color1");
    this.color2 = localStorage.getItem("color2");

  }
}
// export var color1 = 1;
