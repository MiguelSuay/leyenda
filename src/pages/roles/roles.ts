import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColorProvider } from "../../providers/color/color";
/**
 * Generated class for the RolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roles',
  templateUrl: 'roles.html',
})
export class RolesPage {
  color1: any;
  color2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, colorProvider:ColorProvider) {
    this.color1 = colorProvider.color1;
    this.color2 = colorProvider.color2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RolesPage');
  }

}
